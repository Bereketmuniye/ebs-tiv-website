import Link from 'next/link';
import styles from '../../page.module.css';

export default function SeyifuOnEBS() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Seyifu On EBS / ሰይፉ በኢቢኤስ</h1>
          <p className={styles.subtitle}>Current Affairs with Insight and Analysis</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Seyifu On EBS" is EBS TV's flagship current affairs program hosted by the renowned Seyifu, bringing in-depth analysis of Ethiopian and international current events.</p>
            <p>The program provides comprehensive coverage of political, economic, and social issues affecting Ethiopia and the region, with expert commentary and diverse perspectives.</p>
          </div>

          <div className={styles.card}>
            <h2>Program Coverage</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🏛️ Political Analysis</h3>
                <p>In-depth coverage of Ethiopian politics and governance</p>
              </div>
              <div className={styles.feature}>
                <h3>💹 Economic Review</h3>
                <p>Economic policies, market trends, and business developments</p>
              </div>
              <div className={styles.feature}>
                <h3>🌍 Regional Affairs</h3>
                <p>Horn of Africa politics and international relations</p>
              </div>
              <div className={styles.feature}>
                <h3>🏥 Social Issues</h3>
                <p>Education, health, and social development topics</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Meet Seyifu</h2>
            <div className={styles.hostInfo}>
              <h3>Your Host</h3>
              <p>Seyifu is one of Ethiopia's most respected journalists and political commentators, known for his incisive analysis and balanced reporting.</p>
              <p>With decades of experience in Ethiopian media, he brings unparalleled insight to current affairs, helping viewers understand complex issues and their implications.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>📰 Headline Analysis</h4>
                <p>Detailed breakdown of major news stories and their significance</p>
              </div>
              <div className={styles.segment}>
                <h4>👥 Expert Panel</h4>
                <p>Discussions with policymakers, academics, and industry experts</p>
              </div>
              <div className={styles.segment}>
                <h4>🔍 Investigative Reports</h4>
                <p>In-depth investigations of important issues and developments</p>
              </div>
              <div className={styles.segment}>
                <h4>📊 Data Analysis</h4>
                <p>Statistical analysis and data-driven insights on current events</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Topics</h2>
            <div className={styles.topicGrid}>
              <div className={styles.topic}>
                <h4>🏛️ Governance & Democracy</h4>
                <p>Analysis of democratic processes and governance issues</p>
              </div>
              <div className={styles.topic}>
                <h4>💼 Economic Development</h4>
                <p>Coverage of economic policies and development initiatives</p>
              </div>
              <div className={styles.topic}>
                <h4>🌐 International Relations</h4>
                <p>Ethiopia's role in regional and global affairs</p>
              </div>
              <div className={styles.topic}>
                <h4>🏗️ Infrastructure Projects</h4>
                <p>Major development projects and their impact</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Economic Reform Analysis"</h4>
                <p>In-depth analysis of recent economic reforms and their expected impact.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Regional Integration"</h4>
                <p>Discussion of Ethiopia's role in African Union and regional cooperation.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Digital Transformation"</h4>
                <p>Exploring Ethiopia's digital economy and technology initiatives.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Expert Contributors</h2>
            <div className={styles.experts}>
              <h3>Regular Panelists</h3>
              <p>The show features various experts including:</p>
              <ul>
                <li>Political scientists and analysts</li>
                <li>Economists and financial experts</li>
                <li>Academic researchers and professors</li>
                <li>Former government officials</li>
                <li>International relations experts</li>
                <li>Legal and constitutional experts</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Days:</strong> Monday - Thursday</p>
              <p><strong>Time:</strong> 10:00 PM - 11:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Weekend Review:</strong> Saturday 9:00 PM - Week in Review</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Stay Informed on Current Affairs</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Submit Topic</Link>
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
