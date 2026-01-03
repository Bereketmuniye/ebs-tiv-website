import Link from 'next/link';
import styles from '../../page.module.css';

export default function TechTalkWithSolomon() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Tech Talk With Solomon</h1>
          <p className={styles.subtitle}>Your Gateway to Technology and Innovation</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Tech Talk With Solomon" is EBS TV's premier technology program exploring the latest in tech innovation, digital transformation, and technological developments in Ethiopia and beyond.</p>
            <p>Hosted by technology expert Solomon, the show makes complex technology accessible to everyone while highlighting Ethiopia's growing tech ecosystem.</p>
          </div>

          <div className={styles.card}>
            <h2>Tech Topics</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>💻 Digital Innovation</h3>
                <p>Latest tech trends and digital transformation initiatives</p>
              </div>
              <div className={styles.feature}>
                <h4>📱 Mobile Technology</h4>
                <p>Smartphone apps, mobile banking, and connectivity</p>
              </div>
              <div className={styles.feature}>
                <h3>🚀 Startups & Entrepreneurship</h3>
                <p>Ethiopian tech startups and innovation ecosystem</p>
              </div>
              <div className={styles.feature}>
                <h4>🌐 Internet & Connectivity</h4>
                <p>Internet infrastructure and digital inclusion</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Meet Solomon</h2>
            <div className={styles.hostInfo}>
              <h3>Your Tech Expert</h3>
              <p>Solomon is a seasoned technology professional with extensive experience in software development, digital strategy, and tech entrepreneurship.</p>
              <p>His passion for technology and ability to explain complex concepts in simple terms makes him the perfect guide for navigating the digital world.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🔧 Tech Reviews</h4>
                <p>Reviews of latest gadgets, apps, and tech products</p>
              </div>
              <div className={styles.segment}>
                <h4>🚀 Startup Spotlight</h4>
                <p>Featuring Ethiopian tech startups and their innovations</p>
              </div>
              <div className={styles.segment}>
                <h4>💡 Tech Tips</h4>
                <p>Practical technology tips for everyday users</p>
              </div>
              <div className={styles.segment}>
                <h4>🎓 Digital Skills</h4>
                <p>Education on digital literacy and tech skills</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Ethiopian Tech Scene</h2>
            <div className={styles.techGrid}>
              <div className={styles.techArea}>
                <h4>🏢 Tech Hubs</h4>
                <p>Coverage of Ethiopian innovation hubs and tech centers</p>
              </div>
              <div className={styles.techArea}>
                <h4>🎓 Tech Education</h4>
                <p>Coding bootcamps, tech schools, and IT programs</p>
              </div>
              <div className={styles.techArea}>
                <h4>💻 Software Development</h4>
                <p>Ethiopian software companies and development projects</p>
              </div>
              <div className={styles.techArea}>
                <h4>📱 Fintech Innovation</h4>
                <p>Digital banking, mobile money, and financial tech</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Ethiopian Fintech Revolution"</h4>
                <p>Exploring the boom in financial technology and digital banking in Ethiopia.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "AI and Machine Learning"</h4>
                <p>Understanding artificial intelligence and its applications in Ethiopia.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "E-Commerce Growth"</h4>
                <p>The rise of online shopping and digital marketplaces in Ethiopia.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Tech Education</h2>
            <div className={styles.education}>
              <h3>Learning Resources</h3>
              <p>Each episode provides educational content including:</p>
              <ul>
                <li>Step-by-step tech tutorials</li>
                <li>Coding basics and programming tips</li>
                <li>Digital security and privacy guidance</li>
                <li>Productivity tools and software recommendations</li>
                <li>Career advice in tech industry</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Guest Experts</h2>
            <div className={styles.experts}>
              <h3>Tech Professionals</h3>
              <p>The show features various technology experts including:</p>
              <ul>
                <li>Software developers and engineers</li>
                <li>Startup founders and entrepreneurs</li>
                <li>IT consultants and digital strategists</li>
                <li>Cybersecurity specialists</li>
                <li>Data scientists and analysts</li>
                <li>Tech educators and trainers</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Tuesday</p>
              <p><strong>Time:</strong> 7:00 PM - 8:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Wednesday 2:00 PM, Saturday 4:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Stay Tech Savvy</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Tech Talk</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Tech News</Link>
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
