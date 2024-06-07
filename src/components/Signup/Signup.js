import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/Signup.jpg";
import styles from "./Signup.module.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.illustration}>
        <img src={signUpImage} alt="SignUp" />
      </div>
      <div className={styles.form}>
        <div className={styles.heading}>CREATE AN ACCOUNT</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Username"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
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
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
          <h2 align="center" className={styles.or}>
            OR
          </h2>
        </form>
        <p>
          Have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
