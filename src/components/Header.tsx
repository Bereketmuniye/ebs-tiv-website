'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>EBS</span>
                    <span className={styles.logoSub}>TV</span>
                </Link>

                <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/shows" className={styles.navLink}>Shows</Link>
                    <Link href="/news" className={styles.navLink}>News</Link>
                    <Link href="/live" className={styles.navLink}>Live TV</Link>
                    <Link href="/schedule" className={styles.navLink}>Schedule</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/live" className={styles.watchLiveBtn}>
                        <span className={styles.liveDot}></span>
                        Watch Live
                    </Link>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={mobileMenuOpen ? styles.menuIconClose : styles.menuIcon}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
