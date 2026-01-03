import Link from 'next/link';
import styles from '../../page.module.css';

export default function Ethiopis() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Ethiopis / ኢትዮጲስ</h1>
          <p className={styles.subtitle}>Celebrating Ethiopian Heritage and Culture</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About Ethiopis</h2>
            <p>"Ethiopis" is EBS TV's cultural program dedicated to preserving, celebrating, and sharing Ethiopia's rich cultural heritage.</p>
            <p>The show explores Ethiopian traditions, customs, history, and the unique aspects that make Ethiopian culture so special and diverse.</p>
          </div>

          <div className={styles.card}>
            <h2>Cultural Themes</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>📚 Historical Heritage</h3>
                <p>Ancient history, archaeological discoveries, and historical narratives</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Traditional Arts</h3>
                <p>Traditional music, dance, theater, and performing arts</p>
              </div>
              <div className={styles.feature}>
                <h3>🏛️ Cultural Sites</h3>
                <p>Exploration of historical monuments, churches, and cultural landmarks</p>
              </div>
              <div className={styles.feature}>
                <h3>👥 Ethnic Diversity</h3>
                <p>Celebrating Ethiopia's diverse ethnic groups and their traditions</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Cultural Elements</h2>
            <div className={styles.culturalGrid}>
              <div className={styles.culturalItem}>
                <h4>🎵 Musical Traditions</h4>
                <p>Regional musical styles, traditional instruments, and musical heritage</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>🎨 Visual Arts</h4>
                <p>Traditional painting, sculpture, crafts, and artistic expressions</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>📖 Literature & Poetry</h4>
                <p>Classical Ethiopian literature, poetry, and oral traditions</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>🍽️ Culinary Heritage</h4>
                <p>Traditional foods, cooking methods, and culinary customs</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🏛️ Historical Moments</h4>
                <p>Dramatic reenactments and documentaries of key historical events</p>
              </div>
              <div className={styles.segment}>
                <h4>👤 Cultural Icons</h4>
                <p>Profiles of influential figures in Ethiopian culture and history</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Festival Coverage</h4>
                <p>Live coverage and analysis of cultural and religious festivals</p>
              </div>
              <div className={styles.segment}>
                <h4>🏺 Artifact Showcase</h4>
                <p>Display and explanation of cultural artifacts and heirlooms</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regional Focus</h2>
            <div className={styles.regionalGrid}>
              <div className={styles.region}>
                <h4>🌍 Amhara Region</h4>
                <p>Cultural traditions from the Amhara people and historical sites</p>
              </div>
              <div className={styles.region}>
                <h4>🌍 Oromia Region</h4>
                <p>Oromo cultural practices, music, and traditional customs</p>
              </div>
              <div className={styles.region}>
                <h4>🌍 Tigray Region</h4>
                <p>Tigrayan heritage, historical sites, and cultural traditions</p>
              </div>
              <div className={styles.region}>
                <h4>🌍 Southern Nations</h4>
                <p>Diverse cultures from Ethiopia's southern regional states</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "The Kingdom of Axum"</h4>
                <p>Exploring the ancient Axumite civilization and its lasting legacy.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Ethiopian Coffee Ceremony"</h4>
                <p>Detailed look at the traditional Ethiopian coffee ceremony and its cultural significance.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Geez Literature Heritage"</h4>
                <p>Examining ancient Geez manuscripts and literary traditions.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Educational Value</h2>
            <div className={styles.educational}>
              <h3>Learning Opportunities</h3>
              <p>Ethiopis serves as an educational resource for:</p>
              <ul>
                <li>Students learning Ethiopian history and culture</li>
                <li>Diaspora community wanting to connect with roots</li>
                <li>International audiences interested in Ethiopian culture</li>
                <li>Researchers and cultural enthusiasts</li>
                <li>Younger generations preserving traditions</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Tuesday</p>
              <p><strong>Time:</strong> 8:00 PM - 9:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Wednesday 3:00 PM, Saturday 11:00 AM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Discover Ethiopian Culture</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Now</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Cultural Story</Link>
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
