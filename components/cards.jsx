import React, { useEffect, useRef } from 'react'
import styles from '@/styles/courses/Cards.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
function Cards(
    {
        name,
        details,
        // updateActiveSpeaker,
        // index
    }
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
            <div ref={cardRef} className={styles.card_wrapper}>
                <div className={styles.card}>

                    <button className={styles.button}>
                        Download material
                    </button>
                </div>
            </div>

        </>
    )
}

export default Cards

