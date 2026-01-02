import styles from './page.module.css';

export default function LivePage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className={styles.liveDot}></span>
                        Live Stream
                    </h1>
                    <p className={styles.subtitle}>
                        Watch EBS TV broadcasting live 24/7
                    </p>
                </div>
            </section>

            <section className={styles.videoSection}>
                <div className={styles.videoWrapper}>
                    <div className={styles.videoPlayer}>
                        {/* Video player placeholder */}
                        <div className={styles.playerPlaceholder}>
                            <div className={styles.playIcon}>
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                    <circle cx="60" cy="60" r="60" fill="url(#gradient)" opacity="0.9" />
                                    <path d="M45 30L90 60L45 90V30Z" fill="white" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="120" y2="120">
                                            <stop offset="0%" stopColor="#2D882D" />
                                            <stop offset="50%" stopColor="#FBB917" />
                                            <stop offset="100%" stopColor="#DA121A" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className={styles.playerText}>EBS TV Live Stream</p>
                            <p className={styles.playerSubtext}>Click to start watching</p>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className={styles.infoPanel}>
                        <h3 className={styles.infoTitle}>Now Playing</h3>
                        <div className={styles.programInfo}>
                            <div className={styles.programBadge}>LIVE</div>
                            <p className={styles.programName}>EBS TV Live Broadcast</p>
                            <p className={styles.programTime}>Broadcasting 24/7</p>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statIcon}>👥</span>
                                <div>
                                    <p className={styles.statValue}>15K+</p>
                                    <p className={styles.statLabel}>Viewers</p>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statIcon}>🌍</span>
                                <div>
                                    <p className={styles.statValue}>Global</p>
                                    <p className={styles.statLabel}>Coverage</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.platforms}>
                            <h4 className={styles.platformsTitle}>Also watch on:</h4>
                            <div className={styles.platformList}>
                                <a href="#" className={styles.platformBtn}>DSTV 365</a>
                                <a href="#" className={styles.platformBtn}>EthioSat HD</a>
                                <a href="#" className={styles.platformBtn}>Roku</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
