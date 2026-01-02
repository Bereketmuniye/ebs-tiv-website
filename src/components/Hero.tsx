import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Welcome to <span className={styles.gradient}>EBS TV</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Your #1 Choice for Ethiopian Entertainment
                    </p>
                    <p className={styles.description}>
                        Watch the best Ethiopian TV shows, series, dramas, movies, music & latest news - Live and On Demand
                    </p>
                    <div className={styles.actions}>
                        <Link href="/live" className={styles.primaryBtn}>
                            <span className={styles.liveDot}></span>
                            Watch Live Now
                        </Link>
                        <Link href="/shows" className={styles.secondaryBtn}>
                            Browse Shows
                        </Link>
                    </div>
                </div>

                {/* Video Preview */}
                <div className={styles.videoContainer}>
                    <div className={styles.videoPlaceholder}>
                        <div className={styles.playIcon}>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="40" r="40" fill="url(#gradient)" opacity="0.9" />
                                <path d="M32 25L55 40L32 55V25Z" fill="white" />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="80" y2="80">
                                        <stop offset="0%" stopColor="#2D882D" />
                                        <stop offset="50%" stopColor="#FBB917" />
                                        <stop offset="100%" stopColor="#DA121A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.videoText}>
                            <p>EBS TV Live Stream</p>
                            <p className={styles.videoSubtext}>Broadcasting 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className={styles.bgShapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
                <div className={`${styles.shape} ${styles.shape3}`}></div>
            </div>
        </section>
    );
}
