import Link from 'next/link';
import styles from '../../page.module.css';

export default function EthioBusiness() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Ethio Business / ኢትዮ ቢዝነስ</h1>
          <p className={styles.subtitle}>Your Business and Economic News Source</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About Ethio Business</h2>
            <p>"Ethio Business" is EBS TV's premier business program covering Ethiopian economic developments, market trends, and entrepreneurship.</p>
            <p>We provide comprehensive coverage of business news, investment opportunities, and success stories from Ethiopia's dynamic business landscape.</p>
          </div>

          <div className={styles.card}>
            <h2>Business Coverage</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>📈 Market Analysis</h3>
                <p>Stock market updates, commodity prices, and economic indicators</p>
              </div>
              <div className={styles.feature}>
                <h3>🏢 Corporate News</h3>
                <p>Company profiles, mergers, acquisitions, and business expansions</p>
              </div>
              <div className={styles.feature}>
                <h3>💼 Entrepreneurship</h3>
                <p>Startup stories, business tips, and entrepreneurial success stories</p>
              </div>
              <div className={styles.feature}>
                <h3>🌍 International Trade</h3>
                <p>Import/export news, foreign investment, and trade relations</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Key Sectors We Cover</h2>
            <div className={styles.sectorGrid}>
              <div className={styles.sector}>
                <h4>🏭 Manufacturing</h4>
                <p>Industrial development and manufacturing sector news</p>
              </div>
              <div className={styles.sector}>
                <h4>🏗️ Construction</h4>
                <p>Real estate, infrastructure projects, and construction industry</p>
              </div>
              <div className={styles.sector}>
                <h4>🌾 Agriculture</h4>
                <p>Farming, agribusiness, and agricultural technology</p>
              </div>
              <div className={styles.sector}>
                <h4>💻 Technology</h4>
                <p>Tech startups, digital transformation, and IT sector</p>
              </div>
              <div className={styles.sector}>
                <h4>🏦 Banking & Finance</h4>
                <p>Banking sector, microfinance, and financial services</p>
              </div>
              <div className={styles.sector}>
                <h4>✈️ Tourism</h4>
                <p>Travel industry, hotels, and tourism developments</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Features</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>📊 Market Watch</h4>
                <p>Daily market updates and financial analysis</p>
              </div>
              <div className={styles.segment}>
                <h4>👥 CEO Interviews</h4>
                <p>Exclusive interviews with Ethiopian business leaders</p>
              </div>
              <div className={styles.segment}>
                <h4>💡 Business Tips</h4>
                <p>Practical advice for entrepreneurs and business owners</p>
              </div>
              <div className={styles.segment}>
                <h4>🌱 Startup Spotlight</h4>
                <p>Featuring innovative Ethiopian startups and new ventures</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Coverage</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Special: Ethiopian Economic Growth Report</h4>
                <p>Comprehensive analysis of Ethiopia's economic performance and growth projections.</p>
              </div>
              <div className={styles.episode}>
                <h4>Feature: Women in Ethiopian Business</h4>
                <p>Highlighting successful women entrepreneurs and business leaders.</p>
              </div>
              <div className={styles.episode}>
                <h4>Analysis: Investment Opportunities in Ethiopia</h4>
                <p>Exploring promising sectors for local and foreign investors.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Business Resources</h2>
            <div className={styles.resources}>
              <h3>For Entrepreneurs</h3>
              <p>We provide valuable resources including:</p>
              <ul>
                <li>Business registration guidance</li>
                <li>Funding opportunities and grants</li>
                <li>Business planning templates</li>
                <li>Networking events information</li>
                <li>Legal and regulatory updates</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Days:</strong> Monday - Friday</p>
              <p><strong>Time:</strong> 9:00 PM - 10:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Weekend Digest:</strong> Saturday 7:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Stay Informed on Ethiopian Business</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Business News</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Share Your Business Story</Link>
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
