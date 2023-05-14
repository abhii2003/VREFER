import React, { useEffect, useRef } from "react";
import styles from "@/styles/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

function About() {
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      {
        autoAlpha: 0,
        y: 10
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: headingRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);
  useEffect(() => {

    gsap.fromTo(card1Ref.current,
      {
        autoAlpha: 0,
        x: -15
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.inOut",
        x: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card1Ref.current,
          start: "top center+=180",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);
  useEffect(() => {

    gsap.fromTo(card2Ref.current,
      {
        autoAlpha: 0,
        x: 15
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
        x: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center+=180",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);


  return (
    <>
      <section data-scroll-section className={styles.about} id="about">
        <div className={styles.sectionWrapper}>
          <h1 ref={headingRef} className={styles.aboutTitle}>
            Save Time and Study More , We have your back!!
          </h1>
          <p ref={card1Ref} className={styles.aboutPara1}>Introducing a website that provides previous year question papers and materials for students and learners alike. Our website is designed to make the process of finding and downloading the question papers and study materials easy and accessible. We understand the importance of having access to past year question papers and study material for preparation</p>
          <p ref={card2Ref} className={styles.aboutPara2}>that's why we have created this website that is easy to navigate and search for the content you need. With a wide range of subjects and categories, users can find question papers and materials for various exams and courses. Our website provides a platform for learners to enhance their knowledge and achieve their goals.</p>
        </div>
      </section>
    </>
  );

}

export default About;
