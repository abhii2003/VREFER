import React, { useEffect, useRef } from "react";
import styles from "@/styles/components/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);



function About() {
  // const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const lnUnHzRef = useRef(null);

  // for (i=0,i<6,i++){

  // }

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
        y: 10
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card1Ref.current,
          start: "top center+=140",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);
  useEffect(() => {

    gsap.fromTo(card2Ref.current,
      {
        autoAlpha: 0,
        y: 10
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);
  useEffect(() => {

    gsap.fromTo(card3Ref.current,
      {
        autoAlpha: 0,
        y: 10
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);

  useEffect(() => {

    gsap.fromTo(lnUnHzRef.current,
      {
        autoAlpha: 0,
        y: 10
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);



  return (
    <>

    </>
  );

}

export default About;
