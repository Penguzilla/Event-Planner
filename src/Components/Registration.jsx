import NavBar from "../routes/NavBar";
import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export default function Registration() {
  const { registerUser } = useContext(UserContext);

  //validation

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

  //Formik Setup
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      const result = registerUser(values);
      if (result.success) {
        alert("Registered Successfully");
      } else {
        alert(result.message);
      }
    },
  });

  return (
    <div>
      <NavBar />
      <h1>Registration Page</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        {/*userame*/}
        <p>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName && (
            <div style={{ color: "red" }}>{formik.errors.userName}</div>
          )}
        </p>

        {/*Email*/}

        <p>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </p>

        {/*Password*/}
        <p>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </p>

        {/*Confirm Password*/}

        <p>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          )}
        </p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
