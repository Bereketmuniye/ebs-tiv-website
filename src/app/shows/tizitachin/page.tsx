import Link from 'next/link';
import styles from '../../page.module.css';

export default function Tizitachin() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Tizitachin / ትዝታችን</h1>
          <p className={styles.subtitle}>A Journey Through Ethiopian Memories</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About Tizitachin</h2>
            <p>"Tizitachin" (Our Memories) is EBS TV's nostalgic program that takes viewers on a heartfelt journey through Ethiopia's collective memory.</p>
            <p>The show celebrates the people, places, events, and cultural moments that have shaped Ethiopian history and continue to resonate in the hearts of Ethiopians today.</p>
          </div>

          <div className={styles.card}>
            <h2>Memory Categories</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>📸 Historical Moments</h3>
                <p>Significant events that shaped Ethiopia's modern history</p>
              </div>
              <div className={styles.feature}>
                <h3>🎵 Musical Memories</h3>
                <p>Iconic songs and musical performances from different eras</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Cultural Heritage</h3>
                <p>Traditional practices, ceremonies, and cultural celebrations</p>
              </div>
              <div className={styles.feature}>
                <h3>👥 Personal Stories</h3>
                <p>Individual memories and family histories from Ethiopians</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Era Focus</h2>
            <div className={styles.eraGrid}>
              <div className={styles.era}>
                <h4>🏛️ Imperial Era</h4>
                <p>Memories from Ethiopia's imperial period and early modern history</p>
              </div>
              <div className={styles.era}>
                <h4>🎵 1970s-80s</h4>
                <p>The golden age of Ethiopian music and cultural expression</p>
              </div>
              <div className={styles.era}>
                <h4>📺 1990s</h4>
                <p>Transition period and emergence of modern Ethiopian media</p>
              </div>
              <div className={styles.era}>
                <h4>🌱 2000s-Present</h4>
                <p>Recent memories and contemporary Ethiopian achievements</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>📸 Photo Gallery</h4>
                <p>Historical photographs and their stories behind them</p>
              </div>
              <div className={styles.segment}>
                <h4>🎵 Classic Songs</h4>
                <p>Rediscovering beloved Ethiopian songs and their meanings</p>
              </div>
              <div className={styles.segment}>
                <h4>👤 Personal Testimonies</h4>
                <p>First-hand accounts from people who lived through historic moments</p>
              </div>
              <div className={styles.segment}>
                <h4>🏛️ Place Memories</h4>
                <p>Stories about significant places and their historical importance</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Memories</h2>
            <div className={styles.memoryGrid}>
              <div className={styles.memory}>
                <h4>🎭 Ethiopian Theatre Golden Age</h4>
                <p>Celebrating the golden era of Ethiopian theater and legendary performances</p>
              </div>
              <div className={styles.memory}>
                <h4>🏆 Sports Triumphs</h4>
                <p>Remembering Ethiopia's greatest sporting achievements and athletes</p>
              </div>
              <div className={styles.memory}>
                <h4>🎪 Cultural Festivals</h4>
                <p>Traditional celebrations and festivals that bring Ethiopians together</p>
              </div>
              <div className={styles.memory}>
                <h4>📚 Literary Heritage</h4>
                <p>Classic Ethiopian literature and influential writers</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "The Music of the 70s"</h4>
                <p>A nostalgic look at the revolutionary music that defined an era.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Addis Abeba Memories"</h4>
                <p>How the capital city has changed and the memories it holds.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "School Days"</h4>
                <p>Memories of Ethiopian schools and educational experiences.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Audience Participation</h2>
            <div className={styles.participation}>
              <h3>Share Your Memories</h3>
              <p>Tizitachin encourages viewers to participate by:</p>
              <ul>
                <li>Sharing personal photographs and stories</li>
                <li>Sending in favorite songs and their meanings</li>
                <li>Contributing family histories and memories</li>
                <li>Participating in memory-sharing events</li>
                <li>Suggesting topics for future episodes</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Sunday</p>
              <p><strong>Time:</strong> 5:00 PM - 6:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Monday 10:00 AM, Friday 8:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Relive Ethiopian Memories</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Now</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Your Memory</Link>
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
