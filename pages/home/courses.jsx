import React, { useEffect, useRef } from "react";
import styles from "@/styles/courses/course.module.scss";
import Cards from '@/components/cards';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useDraggable } from "react-use-draggable-scroll";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Courses = [

    {
        id: 1,
        name: "Speaker 1",
        details: "Details speaker 1"

    },

    {
        id: 2,
        name: "Speaker 2",
        details: "Details speaker 2"

    },

    {
        id: 3,
        name: "Speaker 3",
        details: "Details speaker 3"

    },

    {
        id: 4,
        name: "Speaker 4",
        details: "Details speaker 4"

    },

    {
        id: 5,
        name: "Speaker 5",
        details: "Details speaker 5"

    },

    {
        id: 6,
        name: "Speaker 6",
        details: "Details speaker 6"

    },

    {
        id: 7,
        name: "Speaker 7",
        details: "Details speaker 7"

    },
    {
        id: 8,
        name: "Speaker 8",
        details: "Details speaker 8"

    }

]





function Course() {
    const headingRef = useRef(null);
    const cardRef = useRef(null);
    const CardwrapperRef = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(CardwrapperRef);

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
    return (
        <>
            <section className={styles.course} id="courses">
                <div className={styles.sectionWrapper}>
                    <h1 ref={headingRef} className={styles.headingCourses} >
                        Look at the <span className={styles.span}>Available </span>Courses Here!!!
                    </h1>
                    <div className={styles.card_gallery_wrap}>

                        <div ref={CardwrapperRef} className={styles.card_carousel} {...events} >
                            {Courses.map((Courses) => (

                                < Cards

                                    cardRef={cardRef}
                                    key={Courses.id}
                                    {...Courses}
                                />
                            ))}
                        </div>
                    </div>
                    <Link href="/all-courses" className={styles.course_btn_wrapper}><button className={styles.course_btn}>All Courses &gt;</button></Link >
                </div>
            </section>
        </>
    );

}

export default Course;
