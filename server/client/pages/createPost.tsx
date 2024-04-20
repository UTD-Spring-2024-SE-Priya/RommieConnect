import styles from "../styles/createPost.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

// Hello

export default function CreatePost() {
  const [imagePreview, setImagePreview] = useState<string>("/darkCamera.png");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Correct type for the event
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("/darkCamera.png");
    }
  };

  return (
    <div className={styles.pageBackground}>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>RommieConnect</h2>
          <ul className={styles.navList}>
            <li>
              <Link href="/createPost" passHref>
                <div className={styles.linkContent}>
                  <Image
                    src="/add.png"
                    alt="Create Post"
                    width={200}
                    height={200}
                    className={styles.icon}
                  />
                  Create Post
                </div>
              </Link>
            </li>
            <li>
              <Link href="/location" passHref>
                <div className={styles.linkContent}>
                  <Image
                    src="/location.png"
                    alt="Location"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                  Location
                </div>
              </Link>
            </li>
            <li>
              <Link href="/mainHomepage" passHref>
                <div className={styles.linkContent}>
                  <Image
                    src="/home.png"
                    alt="Home"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                  Homepage
                </div>
              </Link>
            </li>
            <li>
              <Link href="/profile" passHref>
                <div className={styles.linkContent}>
                  <Image
                    src="/profileIcon.png"
                    alt="Profile"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                  Profile
                </div>
              </Link>
            </li>
          </ul>
          <button className={styles.signOutButton} onClick={handleSignOut}>
            <Link href="/LogIn">Sign Out</Link>
          </button>
        </div>
        <div className={styles.formContainer}>
          <h2 className={styles.createPostHeader}>Create Post</h2>
          <div className={styles.darkCameraIconContainer}>
            <Image
              src={imagePreview}
              alt=" "
              width={70}
              height={70}
              className={styles.darkCameraIcon}
            />

            <input
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleFileChange}
              style={{
                display: "block",
                marginTop: "10px",
                marginLeft: "100px",
              }}
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.formGroup}>
            <div className={styles.labelWithIcon}>
              <label htmlFor="rent">Rent:</label>
              <Image
                src="/money.png"
                alt="Rent"
                width={24}
                height={24}
                className={styles.icon}
              />
              <input type="text" id="rent" name="rent" />
            </div>
            <div className={styles.labelWithIcon}>
              <label htmlFor="petFriendly">Pet Friendly (Y/N):</label>
              <Image
                src="/pet.png"
                alt="Pet Friendly"
                width={24}
                height={24}
                className={styles.icon}
              />
              <input type="text" id="petFriendly" name="petFriendly" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.labelWithIcon}>
              <label htmlFor="location">Location:</label>
              <Image
                src="/location.png"
                alt="Location"
                width={24}
                height={24}
                className={styles.icon}
              />
              <input type="text" id="location" name="location" />
            </div>
            <div className={styles.labelWithIcon}>
              <label htmlFor="floorPlan">Floor Plan:</label>
              <Image
                src="/home.png"
                alt="Floor Plan"
                width={24}
                height={24}
                className={styles.icon}
              />
              <input type="text" id="floorPlan" name="floorPlan" />
            </div>
          </div>
          <div>
            <label htmlFor="genderPreference">
              Preferred Gender of Roommate:
            </label>
            <Image
              src="/man.png"
              alt="Gender"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.genderIcon}`}
            />
            <select id="genderPreference" name="genderPreference">
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="co-ed">Co-ed</option>
            </select>
          </div>
          <div>
            <label htmlFor="additionalInfo">
              Add any extra information you would like others to know:
            </label>
            <textarea id="additionalInfo" name="additionalInfo"></textarea>
          </div>
          <button type="submit" className={styles.postButton}>
            <Link href="/mainHomepage">Post</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function handleSignOut() {
  console.log("Sign Out Clicked!"); // Implement sign-out logic here
}
