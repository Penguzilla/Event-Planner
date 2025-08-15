import NavBar from "../routes/NavBar";
import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export default function Home() {
  const { loginUser, currentUser } = useContext(UserContext);

  // Validate inputs
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
      const result = loginUser(values.userName, values.password);
      if (result.success) {
        alert(`Welcome, ${values.userName}`);
      } else {
        alert(result.message);
      }
    },
  });

  return (
    <div>
      <NavBar /> {/* Navigation Bar */}

      <h1>Welcome to THE EVENT</h1>

      {currentUser ? (
        <h3>Logged in as {currentUser.userName}</h3>
      ) : (
        <div className="container mt-5">
          <form onSubmit={formik.handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="userName">Username:</label>
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="Username"
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
                placeholder="Password"
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
      )}
    </div>
  );
}
