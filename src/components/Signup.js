import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Signup.css";
import signUpImage from "../../assets/Signup.jpg";

export default function Signup() {
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
    <div className="wrapper signUp">
      <div className="illustration">
        <img src={signUpImage} alt="SignUp" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Username"
              autoComplete="name"
              {...register("name", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              id="facultyID"
              placeholder="Faculty ID"
              {...register("facultyID", {
                required: "Faculty ID is required",
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Faculty ID must be alphanumeric",
                },
              })}
            />
            {errors.facultyID && (
              <p className="error">{errors.facultyID.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <button type="submit">SUBMIT</button>
          <h2 align="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/"> Login </Link>
        </p>
      </div>
    </div>
  );
}
