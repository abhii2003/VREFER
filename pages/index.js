import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Homepage from './home';
import Image from 'next/image';
import styles from '@/styles/homepage/Home.module.scss';
import navtoggle from '@/components/navtoggle.js';


export default function Home() {
  return (
    <>
      <Head>
        <title>Vrefer</title>
        <meta name="description" content="This place provides you with all the study material you will ever need, form previous papers to note and expected questions from each module and many more things to come in future. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src={navtoggle} defer></script>

      </Head>
      <Homepage />



    </>
  )
}
