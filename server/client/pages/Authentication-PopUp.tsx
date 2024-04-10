import React from "react";
import styles from "../styles/authentication.module.css";
import Link from "next/link";

export default function AuthenticationPage() {
  return (
    <div className={styles.backgroundImage}>
    <div className={styles.topRightButtons}>
      <button className={styles.topLogInButton}>Sign Up</button>
    </div>
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <form action="">
          <h1 className={styles.verifyTitle}>We have sent you a verification code through your email</h1> 
       
          <div className={styles.inputBox}>
            <input type="text" placeholder="Code" required />
          </div>
          <h2 className={styles.codeDescription}>
              Didn't get the code? Send again
            </h2>
          <button type="submit" className={styles.verifyButton}>
          <Link href = "/Authentication-PopUp">Verify</Link>
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

