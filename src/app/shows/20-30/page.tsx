import Link from 'next/link';
import styles from '../../page.module.css';

export default function Show2030() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>20 – 30 / ሀያ – ሰላሳ</h1>
          <p className={styles.subtitle}>The Talk Show That Matters</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"20 – 30" is EBS TV's flagship talk show that addresses the issues, concerns, and aspirations of Ethiopia's young adult population.</p>
            <p>Hosted by engaging personalities, the show tackles topics ranging from career development and relationships to social issues and current events.</p>
          </div>

          <div className={styles.card}>
            <h2>What We Discuss</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>💼 Career & Education</h3>
                <p>Job opportunities, entrepreneurship, and educational pathways</p>
              </div>
              <div className={styles.feature}>
                <h3>❤️ Relationships</h3>
                <p>Modern dating, marriage, and family dynamics</p>
              </div>
              <div className={styles.feature}>
                <h3>🏥 Health & Wellness</h3>
                <p>Physical and mental health for young adults</p>
              </div>
              <div className={styles.feature}>
                <h3>🌍 Social Issues</h3>
                <p>Current events and social justice topics</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Meet the Host</h2>
            <div className={styles.hostInfo}>
              <h3>Professional Moderator</h3>
              <p>Our host brings years of experience in media and youth engagement, creating a comfortable space for open and honest discussions.</p>
              <p>With a deep understanding of Ethiopian youth culture and challenges, the host guides conversations that are both informative and entertaining.</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>🎯 Expert Interviews</h4>
                <p>Guests from various fields share their expertise and experiences</p>
              </div>
              <div className={styles.segment}>
                <h4>💬 Audience Participation</h4>
                <p>Live calls and social media interactions from viewers</p>
              </div>
              <div className={styles.segment}>
                <h4>📊 Trending Topics</h4>
                <p>Analysis of current trends affecting Ethiopian youth</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Special Features</h4>
                <p>Field reports and special investigative segments</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Career Opportunities in Tech"</h4>
                <p>Exploring the growing tech sector in Ethiopia and opportunities for young professionals.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Mental Health Awareness"</h4>
                <p>Breaking the stigma around mental health and discussing available resources.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Starting Your Own Business"</h4>
                <p>Tips and stories from successful young Ethiopian entrepreneurs.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Thursday</p>
              <p><strong>Time:</strong> 8:00 PM - 9:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Friday 2:00 PM, Sunday 6:00 PM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Join the Conversation</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Contact the Show</Link>
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
