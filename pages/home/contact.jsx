import React from 'react';
import Head from 'next/head';
import styles from '@/styles/contactpage/Contact.module.scss'


function Contact() {
    return (
        <>

            <section data-scroll-section className={styles.contact} id="contact" >
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.touchytext}>Get in Touch</h1>
                    <div className={styles.connectionimage}>
                        image
                    </div>
                    <div className={styles.copyright_message} >Disclaimer: We hereby declare that we do not own the copyrights for the material displayed on this platform. All materials, including but not limited to text, images, audio, video, and graphics, are used for informational or educational purposes only, and we do not claim any ownership or authorship over them. The content is sourced from various public domains, and we make every effort to ensure that the material used on this platform is legally permissible. If you believe that any content on our platform infringes upon your copyright, please contact us immediately to initiate a resolution. We respect intellectual property rights and aim to adhere to all applicable laws and regulations governing copyright.
                        <br /><br /> If you have any dicrepency regrding the material or the copyright kindly mail it to us at vrefercontact@gmail.com</div>
                </div>
            </section>

        </>
    )
}

export default Contact