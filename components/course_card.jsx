import React, { useEffect, useRef } from 'react'
import styles from '@/styles/courses/Cards.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
function Cards(
    { id, description }
) {

    const cardRef = useRef(null);


    useEffect(() => {
        cardRef.current,
            gsap.fromTo(cardRef.current,
                {

                    x: 100,
                    delay: 1,
                    autoAlpha: 0,

                },
                {
                    duration: 0.9,
                    scrub: 1,
                    autoAlpha: 1,
                    ease: "power4.inOut",
                    x: 0,
                    scrollTrigger: {
                        // markers: true, //can be used to debug
                        trigger: cardRef.current,
                        start: "top center",

                        toggleActions: "play none none reverse",

                    }
                }
            );

    }, [])
    return (
        <>


            <div className={`${id} ${styles.card}`} >

                <p>{description}</p>
                <button className={styles.button2}>
                    Download material
                </button>

                {/* Other card content */}
            </div>


        </>
    )
}

export default Cards

