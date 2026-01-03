import Link from 'next/link';
import styles from '../../page.module.css';

export default function EhudinBeEBS() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Ehudin be EBS / እሁድን በኢቢኤስ</h1>
          <p className={styles.subtitle}>Your Sunday Entertainment Destination</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Ehudin be EBS" is EBS TV's flagship Sunday program that combines entertainment, lifestyle, and family-friendly content.</p>
            <p>Perfect for Sunday viewing, the show brings you a mix of music, interviews, cultural segments, and special features that celebrate Ethiopian life.</p>
          </div>

          <div className={styles.card}>
            <h2>What We Offer</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎵 Music & Performance</h3>
                <p>Live musical performances and music video premieres</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Entertainment</h3>
                <p>Comedy sketches, cultural performances, and special acts</p>
              </div>
              <div className={styles.feature}>
                <h3>👥 Celebrity Interviews</h3>
                <p>Conversations with Ethiopian artists, actors, and public figures</p>
              </div>
              <div className={styles.feature}>
                <h3>🏠 Lifestyle</h3>
                <p>Tips for better living, health, and family activities</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🎤 Artist Spotlight</h4>
                <p>Featuring up-and-coming Ethiopian artists and established stars</p>
              </div>
              <div className={styles.segment}>
                <h4>😂 Comedy Corner</h4>
                <p>Stand-up comedy and sketch comedy from Ethiopian comedians</p>
              </div>
              <div className={styles.segment}>
                <h4>🍳 Cooking Segment</h4>
                <p>Demonstrations of traditional and modern Ethiopian recipes</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Cultural Showcase</h4>
                <p>Celebrating Ethiopian traditions, festivals, and cultural practices</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "New Year Special"</h4>
                <p>Celebrating Ethiopian New Year with special performances and interviews.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Music Festival Highlights"</h4>
                <p>Best moments from recent Ethiopian music festivals and concerts.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Family Fun Day"</h4>
                <p>Special family-focused episode with activities and entertainment for all ages.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Guest Features</h2>
            <div className={styles.guestTypes}>
              <h3>Who We Feature</h3>
              <ul>
                <li>Recording artists and musicians</li>
                <li>Actors and actresses from Ethiopian cinema</li>
                <li>Comedians and entertainers</li>
                <li>Chefs and culinary experts</li>
                <li>Cultural experts and historians</li>
                <li>Sports personalities</li>
                <li>Community leaders and influencers</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Sunday</p>
              <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Monday 2:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Join Us on Sunday</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Be a Guest</Link>
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
