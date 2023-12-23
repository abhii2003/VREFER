import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '@/styles/homepage/Home.module.scss';
import About from './about';
import Contact from './contact';
import Course from './courses';
import light from '@/components/images/light.png';
// import SearchBar from '@/components/searchBar';




function HomePage() {

    return (
        <>

            <Head>
                <title>vrefer</title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <section data-scroll-section className={styles.home}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.lamprod}></div>
                    <div className={styles.lamphead}></div>
                    <Image className={styles.light} src={light} height={50} width={250} />
                    <h1 className={styles.homeTitle}>
                        vrefer
                    </h1>
                    <p className={styles.tagline}>
                        ---Unleash Your Academic Potential with vrefer: Your Comprehensive Study Resource
                    </p>
                </div>

            </section>

            <About />
            <Course />
            <Contact />

        </>

    )
}

export default HomePage