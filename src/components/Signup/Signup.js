import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/Signup.jpg";
import styles from "./Signup.module.css";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext/UserContext";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user,setUser] = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    try {
      const createUserURL = "http://127.0.0.1:13020/user/signup"
      const response = await axios.post(createUserURL, data)
      console.log(response.data)
      setUser(response.data)
      navigate('/')
    } catch (error) {
      
    }
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
              type="text"
              id="rollNumber"
              placeholder="Roll Number"
              {...register("rollNumber", { required: "Name is required" })}
            />
            {errors.rollNumber && <p className={styles.error}>{errors.name.message}</p>}
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
              id="phoneNumber"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phoneNumber && <p className={styles.error}>{errors.phone.message}</p>}
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
          Have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}
