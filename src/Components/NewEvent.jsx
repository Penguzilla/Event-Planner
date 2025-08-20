import NavBar from "../routes/NavBar";
import { useContext } from "react";
import { useFormik } from "formik";
import { EventsContext } from "../Context/eventsContext";
import { useLocation, useNavigate } from "react-router-dom";

function NewEvent() {
  //for context, to pass the event when edit is clicked, if no event passed you create new event
  const { addEvent, updateEvent } = useContext(EventsContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Editing event
  const eventToEdit = location.state?.eventToEdit;

  //validation
  const validate = (values) => {
    const errors = {};
    if (!values.eventName) errors.eventName = "Required";
    if (!values.date) errors.date = "Required";
    if (!values.time) errors.time = "Required";
    return errors;
  };

  //Formik setup
  const formik = useFormik({
    initialValues: {
      eventName: eventToEdit?.title || "",
      date: eventToEdit ? eventToEdit.start.toISOString().split("T")[0] : "",
      time: eventToEdit
        ? eventToEdit.start.toTimeString().split(" ")[0].slice(0, 5)
        : "",
      location: eventToEdit?.location || "",
      description: eventToEdit?.description || "",
    },
    validate,
    onSubmit: (values) => {
      const startDate = new Date(`${values.date}T${values.time}`);
      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

      if (eventToEdit) {
        // update existing event and add new event
        updateEvent(eventToEdit, {
          ...eventToEdit,
          title: values.eventName,
          start: startDate,
          end: endDate,
          location: values.location,
          description: values.description,
        });
      } else {
        addEvent({
          title: values.eventName,
          start: startDate,
          end: endDate,
          location: values.location,
          description: values.description,
        });
      }

      navigate("/dashboard");
    },
  });

  return (
    <div>
      <NavBar />
      {/*shows edit or new event*/}
      <h1>{eventToEdit ? "Edit Event" : "New Event"}</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <p>
          {/*Name*/}
          <input
            id="eventName"
            name="eventName"
            type="text"
            placeholder="Event Name"
            onChange={formik.handleChange}
            value={formik.values.eventName}
          />
          {formik.touched.eventName && formik.errors.eventName && (
            <div style={{ color: "red" }}>{formik.errors.eventName}</div>
          )}
        </p>

        <p>
          {/*Date*/}
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date && (
            <div style={{ color: "red" }}>{formik.errors.date}</div>
          )}
        </p>

        <p>
          {/*Time*/}
          <input
            id="time"
            name="time"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.time}
          />
          {formik.touched.time && formik.errors.time && (
            <div style={{ color: "red" }}>{formik.errors.time}</div>
          )}
        </p>

        <p>
          {/*Location*/}
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
        </p>

        <p>
          {/*Description*/}
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
            rows={5} // bigger height
            cols={40} // bigger width
          />
        </p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewEvent;
