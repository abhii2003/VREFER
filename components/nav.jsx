import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/homepage/Nav.module.scss';
import logo from '@/components/images/logo.png';
import navtoggle from '@/components/navtoggle.js';
import dino from '@/components/images/dino.gif';

const Nav = () => {
    return (
        <>

            <header className={styles.header}>
                <div className={styles.logo} >
                    <a href="/" replace >
                        {/* <h1 classname>vrefer</h1> */}
                        <Image src={logo} width={128} height={50} />
                    </a>
                </div>
                <div className={styles.dino}>
                    <Image className={styles.image3} src={dino} height={50} />
                </div>
                <button className={styles.navToggle} id='NavToggle' data-visible="false">
                    <svg className={styles.cross} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#112a3e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" top="1.2rem" right="2.3rem" width="1.3em" height="1.3em" />
                    </svg>
                    <svg className={styles.hamburger} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11H1a1 1 0 010-2h18a1 1 0 110 2zm0-7H1a1 1 0 010-2h18a1 1 0 110 2zm0 14H1a1 1 0 010-2h18a1 1 0 010 2z" fill="#112a3e" top="1.2rem" right="2.3rem" width="1.3em" height="1.3em" />
                    </svg>
                </button>

                <nav className={styles.nav} id='PrimaryNav' data-visible="false">
                    <ul className={styles.nav}>
                        <input className={styles.searchbar} placeholder='   &#x1F50E;&#xFE0E; Search for courses'></input>
                        <li>
                            <a href="/#about" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/#courses" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                                Contact
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
            <script src={navtoggle} defer></script>
        </>
    )
}

export default Nav