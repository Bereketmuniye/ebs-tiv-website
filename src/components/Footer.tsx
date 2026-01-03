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

                    {/* Channels */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Channels</h4>
                        <ul className={styles.links}>
                            <li><Link href="/ebs">EBS</Link></li>
                            <li><Link href="/ebs-musika">EBS Musika</Link></li>
                            <li><Link href="/ebs-cinema">EBS Cinema</Link></li>
                            <li><Link href="https://live.ebstv.tv/">EBS Live</Link></li>
                        </ul>
                    </div>

                    {/* Popular Shows */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Popular Shows</h4>
                        <ul className={styles.links}>
                            <li><Link href="/shows/20-30">20 – 30</Link></li>
                            <li><Link href="/shows/discover-ethiopia">Discover Ethiopia</Link></li>
                            <li><Link href="/shows/ethio-business">Ethio Business</Link></li>
                            <li><Link href="/shows/tizitachin">Tizitachin</Link></li>
                            <li><Link href="/shows/ye-beteseb-chewata">Ye Beteseb Chewata</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Information</h4>
                        <ul className={styles.links}>
                            <li><Link href="/schedule">Schedule</Link></li>
                            <li><Link href="/smsguide">SMS Guide</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/advertise">Advertise Here</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
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
                                <span className={styles.platformIcon}>▶️</span>
                                <span>YouTube</span>
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
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>
                            © {new Date().getFullYear()} EBS TV. All rights reserved.
                        </p>
                        <div className={styles.bottomLinks}>
                            <Link href="/privacy">Privacy Policy</Link>
                            <span className={styles.separator}>|</span>
                            <Link href="/terms">Terms & Conditions</Link>
                            <span className={styles.separator}>|</span>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div className={styles.smsSection}>
                        <p className={styles.sms}>
                            Get EBS TV updates via SMS: Send "A" to <span className={styles.highlight}>7696</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
