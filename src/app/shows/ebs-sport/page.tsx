import Link from 'next/link';
import styles from '../../page.module.css';

export default function EBSSport() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>EBS Sport / ኢቢኤስ ስፖርት</h1>
          <p className={styles.subtitle}>Your Home for Ethiopian Sports</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About EBS Sport</h2>
            <p>EBS Sport brings you comprehensive coverage of Ethiopian sports, from football to athletics and everything in between.</p>
            <p>We celebrate Ethiopian athletes, cover major sporting events, and provide in-depth analysis of the sports scene in Ethiopia.</p>
          </div>

          <div className={styles.card}>
            <h2>Sports Coverage</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>⚽ Football</h3>
                <p>Ethiopian Premier League, national team coverage, and international football news</p>
              </div>
              <div className={styles.feature}>
                <h3>🏃 Athletics</h3>
                <p>Track and field, marathon coverage, and Ethiopian running legends</p>
              </div>
              <div className={styles.feature}>
                <h3>🏀 Basketball</h3>
                <p>Growing basketball scene and Ethiopian basketball league</p>
              </div>
              <div className={styles.feature}>
                <h3>🥊 Combat Sports</h3>
                <p>Boxing, martial arts, and traditional Ethiopian sports</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Programs</h2>
            <div className={styles.programs}>
              <h3>Match Highlights</h3>
              <p>Extended coverage of key matches with expert analysis and player interviews.</p>
              
              <h3>Athlete Profiles</h3>
              <p>In-depth features on Ethiopia's top athletes, their training, and achievements.</p>
              
              <h3>Sports News</h3>
                <p>Daily updates on scores, transfers, and major sporting events.</p>
              
              <h3>Youth Sports</h3>
              <p>Coverage of youth development programs and emerging talent.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Coverage</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Match: Ethiopian Premier League Highlights</h4>
                <p>Weekly roundup of all the action from Ethiopia's top football league.</p>
              </div>
              <div className={styles.episode}>
                <h4>Special: Marathon Training with Ethiopian Champions</h4>
                <p>Behind the scenes with Ethiopia's world-class marathon runners.</p>
              </div>
              <div className={styles.episode}>
                <h4>Analysis: National Team Qualification Campaign</h4>
                <p>Expert analysis of the national team's journey to international competitions.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Live Matches:</strong> As scheduled</p>
              <p><strong>Sports News:</strong> Daily at 6:00 PM</p>
              <p><strong>Weekly Highlights:</strong> Sunday 8:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Stay Updated on Ethiopian Sports</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live Sports</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Sports News</Link>
            </div>
          </div>

          <div className={styles.backLink}>
            <Link href="/shows" className={styles.button}>Back to Shows</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
