import Link from 'next/link';
import styles from '../page.module.css';

export default function EBSMusika() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>EBS Musika</h1>
          <p className={styles.subtitle}>Your Gateway to Ethiopian Music</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Welcome to EBS Musika</h2>
            <p>EBS Musika is dedicated to bringing you the best of Ethiopian music, from traditional melodies to contemporary hits.</p>
            <p>Experience the rich musical heritage and vibrant contemporary scene of Ethiopia 24/7.</p>
          </div>

          <div className={styles.card}>
            <h2>Music Programming</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎵 Traditional Music</h3>
                <p>Classic Ethiopian songs and cultural performances</p>
              </div>
              <div className={styles.feature}>
                <h3>🎤 Contemporary Hits</h3>
                <p>Latest Ethiopian pop, hip-hop, and R&B</p>
              </div>
              <div className={styles.feature}>
                <h3>🎸 Live Performances</h3>
                <p>Concerts and studio sessions with top artists</p>
              </div>
              <div className={styles.feature}>
                <h3>🎼 Music Documentaries</h3>
                <p>Stories behind Ethiopia's musical legends</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Artists</h2>
            <div className={styles.artistGrid}>
              <div className={styles.artist}>
                <h3>Legendary Artists</h3>
                <p>Tilahun Gessesse, Mahmoud Ahmed, Alemayehu Eshete</p>
              </div>
              <div className={styles.artist}>
                <h3>Contemporary Stars</h3>
                <p>Teddy Afro, Jacky Gosee, Gigi, Samuel Yirga</p>
              </div>
              <div className={styles.artist}>
                <h3>Rising Talents</h3>
                <p>New generation of Ethiopian musicians</p>
              </div>
              <div className={styles.artist}>
                <h3>International Fusion</h3>
                <p>Ethiopian artists with global influence</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Special Programs</h2>
            <div className={styles.programs}>
              <h3>Ebs Music Reggae & Afro Beat</h3>
              <p>Dedicated programming for reggae and Afrobeat enthusiasts, featuring both Ethiopian and international artists.</p>
              
              <h3>Music Request Shows</h3>
              <p>Interactive shows where you can request your favorite Ethiopian songs and dedicate them to loved ones.</p>
              
              <h3>Artist Interviews</h3>
              <p>Get up close and personal with Ethiopia's biggest music stars through exclusive interviews.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Listen Everywhere</h2>
            <div className={styles.listenOptions}>
              <div className={styles.listenOption}>
                <h4>📺 Television</h4>
                <p>Available on DSTV Channel 365 and EthioSat</p>
              </div>
              <div className={styles.listenOption}>
                <h4>🌐 Online Streaming</h4>
                <p>Live streaming on our website and mobile apps</p>
              </div>
              <div className={styles.listenOption}>
                <h4>📻 Radio Partner</h4>
                <p>Available through partner radio stations</p>
              </div>
              <div className={styles.listenOption}>
                <h4>🎧 Mobile</h4>
                <p>Dedicated music streaming app</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Experience Ethiopian Music</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Listen Live</Link>
              <Link href="/shows/ebs-music-reggae-afro-beat" className={styles.buttonSecondary}>Featured Shows</Link>
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
