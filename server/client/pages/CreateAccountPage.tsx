import React from "react";
import styles from "../styles/createAcc.module.css";
import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.topRightButtons}>
        <button className={styles.topLogInButton}>Sign Up</button>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <form action="">
            <h1 className={styles.loginTitle}>Create Account</h1>
            <div className={styles.firstNameBox}>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className={styles.lastNameBox}>
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className={styles.emailBox}>
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className={styles.firstNameBox}>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={styles.lastNameBox}>
              <input type="password" placeholder="Verify Password" required />
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
              Create Account
            </button>

            <h3 className={styles.RommieConnect}>RommieConnect</h3>
          </form>
        </div>
      </div>
    </div>
  );
}

