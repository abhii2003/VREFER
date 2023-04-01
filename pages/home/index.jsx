import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '@/styles/homepage/Home.module.scss';




function HomePage() {
    const backToTopRef = useRef(null);
    return (
        <>

            <Head>
                <title>vrefer</title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section data-scroll-section className={styles.home}>


            </section>

        </>

    )
}

export default HomePage