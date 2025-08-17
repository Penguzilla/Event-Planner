import NavBar from "../routes/NavBar";
import { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useFormik } from "formik";


function NewEvent() {

const validate = (values) => {
        const errors = {};

        if (!values.eventName) {
          errors.eventName = "Required";
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
            const result = registerEvent(values);
            if (result.success){
                alert("Event Added");
            }else{
                alert(result.message);
            }
        },
      });

  return (
  <div>
  <NavBar />
  
  <h1>New Event</h1>;
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
            placeholder="Date"
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
            placeholder="Time"
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
          {formik.touched.location && formik.errors.location && (
            <div style={{ color: "red" }}>{formik.errors.location}</div>
          )}
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
          {formik.touched.description && formik.errors.description && (
            <div style={{ color: "red" }}>{formik.errors.description}</div>
          )}
</p>
 <button type="submit">Add Event</button>

  </form>


  </div>
  )
}

export default NewEvent;