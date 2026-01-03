import Link from 'next/link';
import styles from '../../page.module.css';

export default function DiscoverEthiopia() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Discover Ethiopia / ኢትዮጵያን እንወቅ</h1>
          <p className={styles.subtitle}>Explore the Beauty and Culture of Ethiopia</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Discover Ethiopia" takes viewers on an incredible journey through Ethiopia's diverse landscapes, rich history, and vibrant culture.</p>
            <p>From ancient historical sites to modern developments, this showcase celebrates everything that makes Ethiopia unique and special.</p>
          </div>

          <div className={styles.card}>
            <h2>What We Explore</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🏛️ Historical Sites</h3>
                <p>Ancient monuments, rock-hewn churches, and archaeological wonders</p>
              </div>
              <div className={styles.feature}>
                <h3>🏔️ Natural Beauty</h3>
                <p>Mountains, lakes, national parks, and breathtaking landscapes</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Cultural Heritage</h3>
                <p>Traditional ceremonies, festivals, and cultural practices</p>
              </div>
              <div className={styles.feature}>
                <h3>🏙️ Modern Ethiopia</h3>
                <p>Urban development, innovation, and contemporary Ethiopian life</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Destinations</h2>
            <div className={styles.destinationGrid}>
              <div className={styles.destination}>
                <h4>🏛️ Lalibela</h4>
                <p>The incredible rock-hewn churches, often called the "Eighth Wonder of the World"</p>
              </div>
              <div className={styles.destination}>
                <h4>🌊 Lake Tana</h4>
                <p>Source of the Blue Nile and home to ancient island monasteries</p>
              </div>
              <div className={styles.destination}>
                <h4>🏔️ Simien Mountains</h4>
                <p>UNESCO World Heritage site with stunning mountain scenery</p>
              </div>
              <div className={styles.destination}>
                <h4>🏺 Axum</h4>
                <p>Ancient capital and home to mysterious obelisks and historical treasures</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Cultural Highlights</h2>
            <div className={styles.culturalFeatures}>
              <div className={styles.culturalItem}>
                <h4>🎵 Traditional Music</h4>
                <p>Exploring regional musical traditions and instruments</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>🍽️ Culinary Journey</h4>
                <p>Discovering diverse Ethiopian cuisine and cooking traditions</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>🎨 Arts & Crafts</h4>
                <p>Showcasing traditional Ethiopian art, textiles, and handicrafts</p>
              </div>
              <div className={styles.culturalItem}>
                <h4>🎪 Festivals</h4>
                <p>Covering major Ethiopian cultural and religious festivals</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Adventures</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "The Danakil Depression"</h4>
                <p>Journey to one of the hottest places on Earth and discover its unique geological features.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Harar - The Walled City"</h4>
                <p>Exploring the ancient walled city of Harar and its rich Islamic heritage.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Bale Mountains National Park"</h4>
                <p>Discovering Ethiopia's diverse wildlife and pristine natural habitats.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Travel Tips & Information</h2>
            <div className={styles.travelInfo}>
              <h3>For Travelers</h3>
              <p>Each episode provides practical information for visitors including:</p>
              <ul>
                <li>Best times to visit each location</li>
                <li>Transportation options</li>
                <li>Accommodation recommendations</li>
                <li>Cultural etiquette and customs</li>
                <li>Safety tips and local guides</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Saturday</p>
              <p><strong>Time:</strong> 7:00 PM - 8:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Sunday 3:00 PM, Wednesday 10:00 AM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Start Your Ethiopian Journey</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Now</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Your Story</Link>
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
