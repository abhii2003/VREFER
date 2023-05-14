import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Homepage from './home';
// import navtoggle from '@/components/navtoggle.js';


// (async () => {
//   const particle = await import('@/components/particles.js-master/dist/particles.min.js');
// })();

export default function Home() {
  return (
    <>
      <Head>
        <title>Vrefer</title>
        <meta name="description" content="This place provides you with all the study material you will ever need, form previous papers to note and expected questions from each module and many more things to come in future. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src={require('@/components/navtoggle.js')} strategy='lazyOnload' />
        {/* <Script src={require('@/components/particles.js-master/dist/particles.min.js')} strategy='lazyOnload' /> */}

        {/* <script src={particle}></script> */}

      </Head>

      <Homepage />



    </>
  )
}
