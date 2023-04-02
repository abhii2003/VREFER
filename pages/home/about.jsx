import React, { useEffect, useRef } from "react";
import styles from "@/styles/aboutpage/About.module.scss";



function About() {


  return (
    <>
      <section data-scroll-section className={styles.about} id="about">
        <div className={styles.sectionWrapper}>
          <h1 className={styles.aboutTitle}>
            Save Time and Study More , We have your back!!
          </h1>
          <p className={styles.aboutPara1}></p>
          <p className={styles.aboutPara2}></p>
        </div>
      </section>
    </>
  );

}

export default About;
