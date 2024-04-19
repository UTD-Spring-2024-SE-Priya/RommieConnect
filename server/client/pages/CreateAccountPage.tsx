import styles from "../styles/createAcc.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Validation from "./createAccountValidation";

export default function CreateAccountPage() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    verify: "",
  });
  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    verify: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.topRightButtons}>
        <button className={styles.topLogInButton}>Sign Up</button>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <form action="" onSubmit={handleSubmit}>
            <h1 className={styles.loginTitle}>Create Account</h1>
            <div className={styles.namesContainer}>
              <div className={styles.firstNameBox}>
                {" "}
                <input
                  type="text"
                  placeholder="First Name"
                  name="first"
                  onChange={handleInput}
                  required
                />
                {errors.first && (
                  <span style={{ color: "red", display:"block" }} className="text-danger">
                    {" "}
                    {errors.first}
                  </span>
                )}
              </div>
              <div className={styles.lastNameBox}>
                {" "}
                {/* Existing class name for last name */}
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last"
                  onChange={handleInput}
                  required
                />
                {errors.last && (
                  <span style={{ color: "red", display:"block" }} className="text-danger">
                    {" "}
                    {errors.last}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.emailBox}>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={handleInput}
                required
              />
              {errors.email && (
                <span style={{ color: "red" }} className="text-danger">
                  {" "}
                  {errors.email}
                </span>
              )}
            </div>
            <div className={styles.passwordsContainer}>
              <div className={styles.passwordBox}>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                  required
                />
                {errors.password && (
                  <span style={{ color: "red", display:"block" }} className="text-danger">
                    {" "}
                    {errors.password}
                  </span>
                )}
              </div>
              <div className={styles.verifyPasswordBox}>
                <input
                  type="password"
                  placeholder="Verify Password"
                  name="verify"
                  onChange={handleInput}
                  required
                />
                {errors.verify && (
                  <span style={{ color: "red", display:"block" }} className="text-danger">
                    {" "}
                    {errors.verify}
                  </span>
                )}
              </div>
            </div>
            <h2 className={styles.passwordDescription}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </h2>

            <div className={styles.registerLink}>
              <p>
                Have an account?<Link href="/LogIn"> Log In</Link>
              </p>
            </div>
            <button type="submit" className={styles.logInButton}>
              <Link href="/AboutMe">Sign Up</Link>
            </button>
            <h3 className={styles.RommieConnect}>RommieConnect</h3>
          </form>
        </div>
      </div>
    </div>
  );
}
