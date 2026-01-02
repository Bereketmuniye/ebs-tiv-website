import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About Section */}
                    <div className={styles.section}>
                        <h3 className={styles.heading}>
                            <span className={styles.gradientText}>EBS</span> TV
                        </h3>
                        <p className={styles.description}>
                            Your #1 Choice! Home to Ethiopian best TV shows, series dramas, movies, music & latest news.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shows">Shows</Link></li>
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/live">Live TV</Link></li>
                            <li><Link href="/schedule">Schedule</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Information</h4>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/advertise">Advertise</Link></li>
                            <li><Link href="/privacy">Privacy & Cookie</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Watch On */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Watch EBS TV</h4>
                        <ul className={styles.platforms}>
                            <li className={styles.platform}>
                                <span className={styles.platformIcon}>📺</span>
                                <span>DSTV Channel 365</span>
                            </li>
                            <li className={styles.platform}>
                                <span className={styles.platformIcon}>🛰️</span>
                                <span>EthioSat HD</span>
                            </li>
                            <li className={styles.platform}>
                                <span className={styles.platformIcon}>📱</span>
                                <span>Roku Devices</span>
                            </li>
                            <li className={styles.platform}>
                                <span className={styles.platformIcon}>💻</span>
                                <span>Online Live Stream</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} EBS TV. All rights reserved.
                    </p>
                    <p className={styles.sms}>
                        Get updates via SMS: Send "A" to <span className={styles.highlight}>7696</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
