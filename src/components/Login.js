import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../../assets/Login.jpg";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    console.log(formData);
    setFormData(data);
  };

  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              id="facultyID"
              placeholder="Faculty ID"
              autoComplete="facultyID"
              {...register("facultyID", { required: "Faculty ID is required" })}
            />
            {errors.facultyID && <p>{errors.password.message}</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="password"
              {...register("password", {
                required: "Password is required",
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                //   message: "Invalid email address",
                // },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}
