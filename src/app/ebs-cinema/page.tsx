import Link from 'next/link';
import styles from '../page.module.css';

export default function EBSCinema() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>EBS Cinema</h1>
          <p className={styles.subtitle}>Your Home for Ethiopian Films</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Welcome to EBS Cinema</h2>
            <p>EBS Cinema brings you the best of Ethiopian cinema, from classic films to contemporary blockbusters.</p>
            <p>Discover the rich storytelling and cinematic heritage of Ethiopia through our carefully curated selection.</p>
          </div>

          <div className={styles.card}>
            <h2>Movie Categories</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎬 Ethiopian Dramas</h3>
                <p>Compelling stories that reflect Ethiopian culture and society</p>
              </div>
              <div className={styles.feature}>
                <h3>😂 Comedies</h3>
                <p>Laugh-out-loud Ethiopian comedy films and series</p>
              </div>
              <div className={styles.feature}>
                <h3>📖 Historical Films</h3>
                <p>Movies that bring Ethiopia's rich history to life</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Romance</h3>
                <p>Love stories set against the backdrop of Ethiopia</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Films</h2>
            <div className={styles.movieGrid}>
              <div className={styles.movie}>
                <h3>Recent Releases</h3>
                <p>The latest Ethiopian films premiering on EBS Cinema</p>
              </div>
              <div className={styles.movie}>
                <h3>Classic Collection</h3>
                <p>Timeless Ethiopian films that defined generations</p>
              </div>
              <div className={styles.movie}>
                <h3>Independent Cinema</h3>
                <p>Supporting emerging Ethiopian filmmakers</p>
              </div>
              <div className={styles.movie}>
                <h3>International Features</h3>
                <p>World cinema with Ethiopian connections</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Programming Schedule</h2>
            <div className={styles.schedule}>
              <div className={styles.timeSlot}>
                <h4>🌅 Morning Cinema</h4>
                <p>9:00 AM - 12:00 PM - Classic films and family-friendly movies</p>
              </div>
              <div className={styles.timeSlot}>
                <h4>☀️ Afternoon Matinee</h4>
                <p>2:00 PM - 5:00 PM - Recent releases and popular dramas</p>
              </div>
              <div className={styles.timeSlot}>
                <h4>🌆 Prime Time</h4>
                <p>8:00 PM - 11:00 PM - Block premieres and special events</p>
              </div>
              <div className={styles.timeSlot}>
                <h4>🌙 Late Night</h4>
                <p>11:00 PM - 2:00 AM - Cult classics and indie films</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Special Features</h2>
            <div className={styles.specials}>
              <h3>Director's Corner</h3>
              <p>Interviews with Ethiopian directors discussing their craft and latest projects.</p>
              
              <h3>Behind the Scenes</h3>
              <p>Exclusive footage from movie sets and production processes.</p>
              
              <h3>Film Festivals</h3>
              <p>Coverage of Ethiopian film festivals and award ceremonies.</p>
              
              <h3>Actor Spotlights</h3>
              <p>Profiles of Ethiopia's most talented actors and actresses.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>How to Watch</h2>
            <div className={styles.watchOptions}>
              <div className={styles.watchOption}>
                <h4>📺 Television</h4>
                <p>EBS Cinema channel on DSTV and EthioSat</p>
              </div>
              <div className={styles.watchOption}>
                <h4>💻 On-Demand</h4>
                <p>Stream movies anytime on our website</p>
              </div>
              <div className={styles.watchOption}>
                <h4>📱 Mobile Apps</h4>
                <p>Watch on the go with our mobile applications</p>
              </div>
              <div className={styles.watchOption}>
                <h4>🎬 Special Events</h4>
                <p>Premiere events and film screenings</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Start Watching Ethiopian Cinema</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Now</Link>
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
