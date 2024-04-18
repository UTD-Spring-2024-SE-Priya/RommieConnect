import styles from "../styles/Login.module.css";
import Link from "next/link";
import validation from "./validation";
import React, { useState } from "react";

type Values = {
  email: string;
  password: string;
};

type Errors = {
  email?: string;
  password?: string;
};

export default function LogIn() {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  const [errors, setError] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setError(validation(values));
  };

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.topRightButtons}>
        <button className={styles.topLogInButton}>Sign Up</button>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <form action="">
            <h1 className={styles.loginTitle}>Log In</h1>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={values.email}
                required
                onChange={handleChange}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
              )}
            </div>
            <div className={styles.inputBox}>
              <input type="password" placeholder="Password" required />
            </div>

            <h2 className={styles.passwordDescription}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </h2>

            <div className={styles.registerLink}>
              <p>
                Do not have an account?{" "}
                <Link href="/CreateAccountPage">SignUp</Link>
              </p>
            </div>
            <button type="submit" className={styles.logInButton}>
              Log In
            </button>

            <h3 className={styles.RommieConnect}>RommieConnect</h3>
          </form>
        </div>
      </div>
    </div>
  );
}
