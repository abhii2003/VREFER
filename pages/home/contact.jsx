import React from 'react';
import Head from 'next/head';
import styles from '@/styles/contactpage/Contact.module.scss'


function Contact() {
    return (
        <>

            <section data-scroll-section className={styles.contact} id="contact" >
                <div className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.touchytext}>
                            <h1>Get in Touch</h1>
                            <div className={styles.connectionlinks} >

                                <div className={styles.fa} ><a href="#"  > </a></div>
                                <div className={styles.fa} ><a href="#" ></a></div>
                                <div className={styles.fa} ><a href="#" ></a></div>
                            </div>
                        </div>
                        <div className={styles.connectionimage}>
                            image
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact