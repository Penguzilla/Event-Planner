import NavBar from "../routes/NavBar";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useFormik } from "formik";

export default function Home() {
    const validate = (values) => {
    const errors = {};

     if (!values.userName) {
      errors.userName = "Required";
    } 

     if (!values.password) {
      errors.password = "Required";
    }
    return errors;
};

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
    
    return (
        <div>
        <NavBar /> {/*Navigation Bar*/}

        <h1>Welcome to THE EVENT</h1>

         <div className="container mt-5">
        <form onSubmit={formik.handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="userName">Username:</label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              className="form-control"
            />
            {formik.touched.userName && formik.errors.userName && (
              <div style={{ color: "red" }}>{formik.errors.userName}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="form-control"
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}