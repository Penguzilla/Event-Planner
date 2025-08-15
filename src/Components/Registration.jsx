import NavBar from "../routes/NavBar";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useFormik } from "formik";

export default function Registration() {

      {
        /*validation*/
      }
      const validate = (values) => {
        const errors = {};
    
        if (!values.userName) {
          errors.userName = "Required";
        } 
    
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
    
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Must be more than 8 characters";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(values.password)
        ) {
          errors.password =
            "Password must contain uppercase, lowercase, number, and special character";
        }
    
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "Passwords must match";
        }
    
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div>
        <NavBar />
        <h1>Registration Page</h1>
      <br/>
      <form onSubmit={formik.handleSubmit}>
        
        {/*userame*/}
        <h3>
          <label htmlFor="userName">First Name</label>
        </h3>
        <p>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName && (
            <div style={{ color: "red" }}>{formik.errors.userName}</div>
          )}
        </p>

        {/*Email*/}
        <h3>
          <label htmlFor="email">Email Address</label>
        </h3>
        <p>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </p>

        {/*Password*/}
        <h3>
          <label htmlFor="password">Password</label>
        </h3>
        <p>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </p>

        {/*Confirm Password*/}
        <h3>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </h3>
        <p>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          )}
        </p>

        <button type="submit">Submit</button>
      </form>
        </div>
    );
}