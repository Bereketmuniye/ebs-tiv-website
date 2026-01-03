import Link from 'next/link';
import styles from '../../page.module.css';

export default function HelenShow() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Helen Show / ሄለን ሾው</h1>
          <p className={styles.subtitle}>Entertainment with Style and Substance</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About Helen Show</h2>
            <p>The "Helen Show" is EBS TV's popular entertainment program hosted by the charismatic Helen, bringing you the best in Ethiopian entertainment.</p>
            <p>Combining celebrity interviews, musical performances, fashion, and lifestyle content, the show has become a must-watch for Ethiopian entertainment enthusiasts.</p>
          </div>

          <div className={styles.card}>
            <h2>Show Features</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎤 Celebrity Interviews</h3>
                <p>Exclusive conversations with Ethiopian stars and public figures</p>
              </div>
              <div className={styles.feature}>
                <h3>🎵 Musical Performances</h3>
                <p>Live performances from top Ethiopian artists</p>
              </div>
              <div className={styles.feature}>
                <h3>👗 Fashion & Style</h3>
                <p>Latest fashion trends and style tips</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Entertainment News</h3>
                <p>Latest updates from Ethiopian entertainment industry</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Meet Helen</h2>
            <div className={styles.hostInfo}>
              <h3>Your Host</h3>
              <p>Helen brings her unique charm, wit, and professionalism to every episode. With years of experience in Ethiopian media, she creates an engaging atmosphere that puts guests at ease while entertaining viewers.</p>
              <p>Her ability to connect with both celebrities and audiences has made the Helen Show one of EBS TV's most popular programs.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🌟 Star of the Week</h4>
                <p>Featuring an emerging Ethiopian talent or established star</p>
              </div>
              <div className={styles.segment}>
                <h4>🎬 Behind the Scenes</h4>
                <p>Exclusive footage from movie sets and music video shoots</p>
              </div>
              <div className={styles.segment}>
                <h4>👗 Fashion Spotlight</h4>
                <p>Showcasing Ethiopian fashion designers and trends</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Audience Interaction</h4>
                <p>Live calls, social media engagement, and viewer participation</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Notable Guests</h2>
            <div className={styles.guestGrid}>
              <div className={styles.guestCategory}>
                <h4>🎵 Music Artists</h4>
                <p>Top Ethiopian singers, musicians, and composers</p>
              </div>
              <div className={styles.guestCategory}>
                <h4>🎬 Actors & Actresses</h4>
                <p>Stars from Ethiopian cinema and theater</p>
              </div>
              <div className={styles.guestCategory}>
                <h4>🎭 Comedians</h4>
                <p>Popular Ethiopian comedians and entertainers</p>
              </div>
              <div className={styles.guestCategory}>
                <h4>📺 TV Personalities</h4>
                <p>Hosts, presenters, and media personalities</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Music Festival Special"</h4>
                <p>Highlights from recent Ethiopian music festivals with artist interviews.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "New Year Fashion Show"</h4>
                <p>Featuring Ethiopian designers and their latest collections.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Comedy Night Special"</h4>
                <p>Evening of laughter with Ethiopia's top comedians.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Special Features</h2>
            <div className={styles.specials}>
              <h3>Annual Specials</h3>
              <p>The Helen Show produces several special episodes throughout the year:</p>
              <ul>
                <li>Ethiopian New Year Special</li>
                <li>Christmas and Holiday Specials</li>
                <li>Valentine's Day Romance Special</li>
                <li>International Women's Day Special</li>
                <li>Year-End Awards and Highlights</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Friday</p>
              <p><strong>Time:</strong> 9:00 PM - 10:30 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Saturday 1:00 PM, Sunday 7:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Join the Entertainment</h2>
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
