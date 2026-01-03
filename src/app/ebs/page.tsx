import Link from 'next/link';
import styles from '../page.module.css';

export default function EBSChannel() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>EBS Channel</h1>
          <p className={styles.subtitle}>Your #1 Choice for Ethiopian Entertainment</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Welcome to EBS</h2>
            <p>EBS (Ethiopian Broadcasting Service) is your premier destination for quality Ethiopian television programming.</p>
            <p>We bring you the best in entertainment, news, culture, and education 24/7.</p>
          </div>

          <div className={styles.card}>
            <h2>What We Offer</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>📺 Live Programming</h3>
                <p>Watch your favorite shows as they air, live from Ethiopia</p>
              </div>
              <div className={styles.feature}>
                <h3>📰 News & Current Affairs</h3>
                <p>Stay informed with the latest news and current events</p>
              </div>
              <div className={styles.feature}>
                <h3>🎬 Entertainment</h3>
                <p>Dramas, comedies, and variety shows for the whole family</p>
              </div>
              <div className={styles.feature}>
                <h3>🎵 Music & Culture</h3>
                <p>Celebrate Ethiopian music, culture, and traditions</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Popular Shows on EBS</h2>
            <div className={styles.showGrid}>
              <Link href="/shows/20-30" className={styles.showLink}>
                <h3>20 – 30 / ሀያ – ሰላሳ</h3>
                <p>Popular talk show covering current topics</p>
              </Link>
              <Link href="/shows/discover-ethiopia" className={styles.showLink}>
                <h3>Discover Ethiopia</h3>
                <p>Explore the beauty and culture of Ethiopia</p>
              </Link>
              <Link href="/shows/ethio-business" className={styles.showLink}>
                <h3>Ethio Business</h3>
                <p>Business and entrepreneurship insights</p>
              </Link>
              <Link href="/shows/tizitachin" className={styles.showLink}>
                <h3>Tizitachin</h3>
                <p>Cultural and historical programming</p>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <h2>How to Watch</h2>
            <div className={styles.watchOptions}>
              <div className={styles.watchOption}>
                <h4>📺 DSTV Channel 365</h4>
                <p>Available on DSTV across Africa</p>
              </div>
              <div className={styles.watchOption}>
                <h4>🛰️ EthioSat HD</h4>
                <p>Free-to-air satellite service</p>
              </div>
              <div className={styles.watchOption}>
                <h4>💻 Online Streaming</h4>
                <p>Watch live on our website</p>
              </div>
              <div className={styles.watchOption}>
                <h4>📱 Mobile Apps</h4>
                <p>Available on iOS and Android</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Start Watching Now</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/schedule" className={styles.buttonSecondary}>View Schedule</Link>
            </div>
          </div>

          <div className={styles.backLink}>
            <Link href="/" className={styles.button}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
