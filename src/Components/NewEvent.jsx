import NavBar from "../routes/NavBar";
import { useContext } from "react";
import { useFormik } from "formik";
import { EventsContext } from "../Context/eventsContext";


function NewEvent() {

  const { addEvent } = useContext(EventsContext);

  const validate = (values) => {
    const errors = {};
    if (!values.eventName) {
      errors.eventName = "Required";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    if (!values.time) {
      errors.time = "Required";
    }
    return errors;
  };

    const formik = useFormik({
        initialValues: {
          eventName: "",
          date: "",
          time: "",
          description: "",
          location: "",
          
        },
    validate,
    onSubmit: (values) => {
      // Convert form values into Calendar event
      const startDate = new Date(`${values.date}T${values.time}`);
      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // default 1 hour

      addEvent({
        title: values.eventName,
        start: startDate,
        end: endDate,
        description: values.description,
        location: values.location,
      });

      alert("Event Added");
    },
  });

return (
    <div>
      <NavBar />
      <h1>New Event</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <p>
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
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </p>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default NewEvent;