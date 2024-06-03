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
              id="name"
              placeholder="Username"
              autoComplete="username"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
