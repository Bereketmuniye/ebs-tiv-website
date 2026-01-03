import Link from 'next/link';
import styles from '../../page.module.css';

export default function KidamenKeseat() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Kidamen Keseat / ቅዳሜን ከሰዓት</h1>
          <p className={styles.subtitle}>Your Saturday Entertainment Destination</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Kidamen Keseat" (Saturday and Hours) is EBS TV's signature weekend program that combines entertainment, lifestyle, and family-friendly content.</p>
            <p>Perfect for Saturday viewing, the show brings you a mix of celebrity interviews, musical performances, cultural segments, and engaging discussions that appeal to the whole family.</p>
          </div>

          <div className={styles.card}>
            <h2>Show Elements</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎤 Celebrity Interviews</h3>
                <p>In-depth conversations with Ethiopian stars and public figures</p>
              </div>
              <div className={styles.feature}>
                <h3>🎵 Live Music</h3>
                <p>Performances from established and emerging Ethiopian artists</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Comedy & Entertainment</h3>
                <p>Comedy sketches and entertaining segments</p>
              </div>
              <div className={styles.feature}>
                <h3>🏠 Lifestyle Content</h3>
                <p>Health, relationships, and family-oriented topics</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Program Structure</h2>
            <div className={styles.programStructure}>
              <div className={styles.segment}>
                <h4>🌅 Morning Edition (10:00 AM - 12:00 PM)</h4>
                <p>Family-friendly content, lifestyle tips, and light entertainment</p>
              </div>
              <div className={styles.segment}>
                <h4>☀️ Afternoon Edition (2:00 PM - 4:00 PM)</h4>
                <p>Cultural segments, music performances, and audience interaction</p>
              </div>
              <div className={styles.segment}>
                <h4>🌆 Evening Edition (8:00 PM - 10:00 PM)</h4>
                <p>Prime celebrity interviews and entertainment highlights</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>⭐ Star Spotlight</h4>
                <p>Featuring Ethiopian celebrities and their latest projects</p>
              </div>
              <div className={styles.segment}>
                <h4>🎵 Music Corner</h4>
                <p>Showcasing new releases and classic Ethiopian music</p>
              </div>
              <div className={styles.segment}>
                <h4>😂 Comedy Hour</h4>
                <p>Stand-up comedy and sketch performances</p>
              </div>
              <div className={styles.segment}>
                <h4>👥 Audience Time</h4>
                <p>Live calls, social media interactions, and viewer questions</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Guest Categories</h2>
            <div className={styles.guestTypes}>
              <div className={styles.guestType}>
                <h4>🎬 Entertainment Industry</h4>
                <p>Actors, directors, producers, and entertainment professionals</p>
              </div>
              <div className={styles.guestType}>
                <h4>🎵 Music Industry</h4>
                <p>Singers, musicians, composers, and music producers</p>
              </div>
              <div className={styles.guestType}>
                <h4>📺 Media Personalities</h4>
                <p>TV hosts, radio presenters, and journalists</p>
              </div>
              <div className={styles.guestType}>
                <h4>🏆 Sports Figures</h4>
                <p>Athletes, coaches, and sports personalities</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Ethiopian Film Festival Special"</h4>
                <p>Coverage of recent film festivals with actor interviews and movie previews.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Music Legends Night"</h4>
                <p>Tribute to legendary Ethiopian musicians with performances and memories.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Comedy Extravaganza"</h4>
                <p>Special comedy episode featuring Ethiopia's top comedians.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Interactive Features</h2>
            <div className={styles.interactive}>
              <h3>Audience Participation</h3>
              <p>Kidamen Keseat encourages viewer interaction through:</p>
              <ul>
                <li>Live phone calls during the show</li>
                <li>Social media questions and comments</li>
                <p>Viewer polls and surveys</p>
                <li>Contests and giveaways</li>
                <li>Guest suggestions and requests</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Saturday</p>
              <p><strong>Times:</strong> 10:00 AM, 2:00 PM, 8:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Sunday Highlights:</strong> 6:00 PM - Best of the Week</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Join Us on Saturday</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Participate in Show</Link>
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
