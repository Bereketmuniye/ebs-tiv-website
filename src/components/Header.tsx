'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [channelsDropdown, setChannelsDropdown] = useState(false);
    const [showsDropdown, setShowsDropdown] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>EBS</span>
                    <span className={styles.logoSub}>TV</span>
                </Link>

                <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/news" className={styles.navLink}>News</Link>
                    
                    <div 
                        className={`${styles.dropdown} ${channelsDropdown ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => setChannelsDropdown(true)}
                        onMouseLeave={() => setChannelsDropdown(false)}
                    >
                        <button className={styles.dropdownToggle}>Channels</button>
                        <div className={styles.dropdownMenu}>
                            <Link href="/ebs" className={styles.dropdownLink}>EBS</Link>
                            <Link href="/ebs-musika" className={styles.dropdownLink}>EBS Musika</Link>
                            <Link href="/ebs-cinema" className={styles.dropdownLink}>EBS Cinema</Link>
                        </div>
                    </div>

                    <div 
                        className={`${styles.dropdown} ${showsDropdown ? styles.dropdownOpen : ''}`}
                        onMouseEnter={() => setShowsDropdown(true)}
                        onMouseLeave={() => setShowsDropdown(false)}
                    >
                        <button className={styles.dropdownToggle}>Shows</button>
                        <div className={`${styles.dropdownMenu} ${styles.showsMenu}`}>
                            <Link href="/shows/20-30" className={styles.dropdownLink}>20 – 30 / ሀያ – ሰላሳ</Link>
                            <Link href="/shows/discover-ethiopia" className={styles.dropdownLink}>Discover Ethiopia / ኢትዮጵያን እንወቅ</Link>
                            <Link href="/shows/ebs-sport" className={styles.dropdownLink}>EBS Sport / ኢቢኤስ ስፖርት</Link>
                            <Link href="/shows/ehudin-be-ebs" className={styles.dropdownLink}>Ehudin be EBS / እሁድን በኢቢኤስ</Link>
                            <Link href="/shows/ethio-business" className={styles.dropdownLink}>Ethio Business / ኢትዮ ቢዝነስ</Link>
                            <Link href="/shows/ethiopis" className={styles.dropdownLink}>Ethiopis / ኢትዮጲስ</Link>
                            <Link href="/shows/helen-show" className={styles.dropdownLink}>Helen Show / ሄለን ሾው</Link>
                            <Link href="/shows/kidamen-keseat" className={styles.dropdownLink}>Kidamen keseat /ቅዳሜን ከሰዓት</Link>
                            <Link href="/shows/new-life" className={styles.dropdownLink}>New Life / አዲስ ሂወት</Link>
                            <Link href="/shows/seyifu-on-ebs" className={styles.dropdownLink}>Seyifu On EBS / ሰይፉ በኢቢኤስ</Link>
                            <Link href="/shows/tech-talk-with-solomon" className={styles.dropdownLink}>Tech Talk With Solomon</Link>
                            <Link href="/shows/tizitachin" className={styles.dropdownLink}>Tizitachin / ትዝታችን</Link>
                            <Link href="/shows/ye-beteseb-chewata" className={styles.dropdownLink}>Ye beteseb Chewata / የቤተሰብ ጨዋታ</Link>
                            <Link href="/shows/ebs-music-reggae-afro-beat" className={styles.dropdownLink}>Ebs Music reggae & Afro Beat /ኢቢኤስ ሙዚቃ ሬጌ እና አፍሮ ቢት</Link>
                        </div>
                    </div>

                    <Link href="/schedule" className={styles.navLink}>Schedule</Link>
                    <Link href="/smsguide" className={styles.navLink}>SMS Guide</Link>
                    <Link href="/contact" className={styles.navLink}>Contact Us</Link>
                    <Link href="https://live.ebstv.tv/" className={styles.navLink}>EBS live</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="https://live.ebstv.tv/" className={styles.watchLiveBtn}>
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
