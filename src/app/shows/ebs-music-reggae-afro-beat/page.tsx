import Link from 'next/link';
import styles from '../../page.module.css';

export default function EBSMusicReggaeAfroBeat() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>EBS Music Reggae & Afro Beat</h1>
          <p className={styles.subtitle}>The Best of Reggae and Afrobeat Music</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"EBS Music Reggae & Afro Beat" is EBS TV's dedicated music program celebrating the rhythms and messages of reggae and Afrobeat music.</p>
            <p>The show features both Ethiopian and international artists, showcasing the best of these powerful music genres that have influenced Ethiopian music culture.</p>
          </div>

          <div className={styles.card}>
            <h2>Music Focus</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎵 Reggae Classics</h3>
                <p>Classic reggae hits from legendary artists</p>
              </div>
              <div className={styles.feature}>
                <h3>🎸 Afrobeat Masters</h3>
                <p>Pioneering Afrobeat artists and their revolutionary sounds</p>
              </div>
              <div className={styles.feature}>
                <h3>🇪🇹 Ethiopian Fusion</h3>
                <p>Ethiopian artists incorporating reggae and Afrobeat elements</p>
              </div>
              <div className={styles.feature}>
                <h3>🎤 New Generation</h3>
                <p>Contemporary artists carrying the reggae and Afrobeat legacy</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Artists</h2>
            <div className={styles.artistGrid}>
              <div className={styles.artistCategory}>
                <h4>🌍 International Reggae Legends</h4>
                <p>Bob Marley, Peter Tosh, Burning Spear, Jimmy Cliff, and more</p>
              </div>
              <div className={styles.artistCategory}>
                <h4>🎺 Afrobeat Pioneers</h4>
                <p>Fela Kuti, Tony Allen, Hugh Masekela, and African music giants</p>
              </div>
              <div className={styles.artistCategory}>
                <h4>🇪🇹 Ethiopian Reggae Artists</h4>
                <p>Ethiopian musicians who have embraced reggae music</p>
              </div>
              <div className={styles.artistCategory}>
                <h4>🎵 Contemporary Stars</h4>
                <p>Modern artists blending reggae and Afrobeat with Ethiopian sounds</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🎵 Classic Hour</h4>
                <p>Dedicated to classic reggae and Afrobeat hits</p>
              </div>
              <div className={styles.segment}>
                <h4>🎤 Artist Spotlight</h4>
                <p>In-depth features on influential artists and their music</p>
              </div>
              <div className={styles.segment}>
                <h4>🇪🇹 Ethiopian Connection</h4>
                <p>How reggae and Afrobeat have influenced Ethiopian music</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Live Sessions</h4>
                <p>Live performances and studio sessions</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Music Themes</h2>
            <div className={styles.themeGrid}>
              <div className={styles.theme}>
                <h4>✊ Social Justice</h4>
                <p>Music with messages of equality, freedom, and social change</p>
              </div>
              <div className={styles.theme}>
                <h4>❤️ Love and Unity</h4>
                <p>Songs promoting love, peace, and unity among people</p>
              </div>
              <div className={styles.theme}>
                <h4>🌍 Cultural Pride</h4>
                <p>Celebrating African and Ethiopian cultural identity</p>
              </div>
              <div className={styles.theme}>
                <h4>🙏 Spiritual Messages</h4>
                <p>Music with spiritual and philosophical themes</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Bob Marley Legacy"</h4>
                <p>Celebrating the life and music of the reggae legend Bob Marley.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Fela Kuti Revolution"</h4>
                <p>Exploring the revolutionary music of Afrobeat pioneer Fela Kuti.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Ethiopian Reggae Scene"</h4>
                <p>Featuring Ethiopian artists who have embraced reggae music.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Music History</h2>
            <div className={styles.history}>
              <h3>The Origins</h3>
              <p>Each episode explores the rich history of these music genres:</p>
              <ul>
                <li>Jamaican roots of reggae music and Rastafari influence</li>
                <li>Nigerian origins of Afrobeat and political activism</li>
                <li>How these genres spread across Africa and the world</li>
                <li>The connection to Ethiopian music and culture</li>
                <li>Evolution and modern interpretations</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Interactive Features</h2>
            <div className={styles.interactive}>
              <h3>Audience Engagement</h3>
              <p>The show encourages viewer participation through:</p>
              <ul>
                <li>Song requests and dedications</li>
                <li>Voting for favorite artists and songs</li>
                <li>Social media discussions about music topics</li>
                <li>Sharing personal music stories and memories</li>
                <li>Participating in music trivia and contests</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Friday</p>
              <p><strong>Time:</strong> 11:00 PM - 12:00 AM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Saturday 6:00 PM, Sunday 11:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Feel the Rhythm</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Music Show</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Request a Song</Link>
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
