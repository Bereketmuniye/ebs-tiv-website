import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badges}>
                        <span className={styles.liveBadge}>
                            <span className={styles.liveDot}></span>
                            LIVE NOW
                        </span>
                        <span className={styles.hdBadge}>HD QUALITY</span>
                    </div>
                    
                    <h1 className={styles.title}>
                        EBS TV
                        <span className={styles.subtitle}>Your #1 Choice!</span>
                    </h1>
                    
                    <p className={styles.description}>
                        Home To Ethiopian Best TV Shows, Series Dramas, Movies, Musics & Latest News
                    </p>
                    
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>24/7</span>
                            <span className={styles.statLabel}>Live Streaming</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Popular Shows</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>3</span>
                            <span className={styles.statLabel}>Channels</span>
                        </div>
                    </div>
                    
                    <div className={styles.actions}>
                        <Link href="https://live.ebstv.tv/" className={styles.primaryBtn}>
                            <span className={styles.btnIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                </svg>
                            </span>
                            WATCH LIVE NOW
                        </Link>
                        
                        <Link href="/schedule" className={styles.secondaryBtn}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            View Schedule
                        </Link>
                    </div>
                </div>

                <div className={styles.visualSection}>
                    <div className={styles.videoCard}>
                        <div className={styles.videoThumbnail}>
                            <div className={styles.playOverlay}>
                                <div className={styles.playButton}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.95)" />
                                        <path d="M20 16L32 24L20 32V16Z" fill="#DA121A" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.videoInfo}>
                                <h3>EBS TV Live Stream</h3>
                                <p>Broadcasting from Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.channelCards}>
                        <div className={styles.channelCard}>
                            <div className={styles.channelIcon} style={{background: 'linear-gradient(135deg, #2D882D, #FBB917)'}}>
                                <span>EBS</span>
                            </div>
                            <div className={styles.channelInfo}>
                                <h4>Main Channel</h4>
                                <p>Entertainment & News</p>
                            </div>
                        </div>
                        
                        <div className={styles.channelCard}>
                            <div className={styles.channelIcon} style={{background: 'linear-gradient(135deg, #FBB917, #DA121A)'}}>
                                <span>MUSIKA</span>
                            </div>
                            <div className={styles.channelInfo}>
                                <h4>Music Channel</h4>
                                <p>24/7 Ethiopian Music</p>
                            </div>
                        </div>
                        
                        <div className={styles.channelCard}>
                            <div className={styles.channelIcon} style={{background: 'linear-gradient(135deg, #DA121A, #2D882D)'}}>
                                <span>CINEMA</span>
                            </div>
                            <div className={styles.channelInfo}>
                                <h4>Movies & Series</h4>
                                <p>Ethiopian Cinema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
