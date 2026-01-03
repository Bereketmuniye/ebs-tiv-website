import Link from 'next/link';
import styles from '../../page.module.css';

export default function NewLife() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>New Life / አዲስ ሂወት</h1>
          <p className={styles.subtitle}>Inspiring Stories of Transformation</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About New Life</h2>
            <p>"New Life" is an inspiring EBS TV program that shares real stories of personal transformation, overcoming challenges, and finding new beginnings.</p>
            <p>The show features individuals who have turned their lives around, overcome adversity, and found success through determination, faith, and perseverance.</p>
          </div>

          <div className={styles.card}>
            <h2>Program Focus</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🙏 Spiritual Growth</h3>
                <p>Stories of faith, spiritual awakening, and religious transformation</p>
              </div>
              <div className={styles.feature}>
                <h3>💪 Personal Development</h3>
                <p>Journeys of self-improvement and personal achievement</p>
              </div>
              <div className={styles.feature}>
                <h3>🔄 Life Changes</h3>
                <p>Stories of major life transitions and new beginnings</p>
              </div>
              <div className={styles.feature}>
                <h3>🌟 Success Stories</h3>
                <p>Inspiring tales of overcoming obstacles to achieve success</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Featured Stories</h2>
            <div className={styles.storyCategories}>
              <div className={styles.storyCategory}>
                <h4>🏃‍♂️ Addiction Recovery</h4>
                <p>Stories of overcoming substance abuse and finding sobriety</p>
              </div>
              <div className={styles.storyCategory}>
                <h4>💼 Career Transformation</h4>
                <p>People who changed careers and found their true calling</p>
              </div>
              <div className={styles.storyCategory}>
                <h4>❤️ Relationship Healing</h4>
                <p>Stories of restored relationships and finding love again</p>
              </div>
              <div className={styles.storyCategory}>
                <h4>🎓 Educational Success</h4>
                <p>Individuals who pursued education against all odds</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Segments</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>📖 Testimony Time</h4>
                <p>Personal testimonies of life-changing experiences</p>
              </div>
              <div className={styles.segment}>
                <h4>🎯 Expert Advice</h4>
                <p>Professional counselors and life coaches share insights</p>
              </div>
              <div className={styles.segment}>
                <h4>🤝 Community Support</h4>
                <p>Resources and organizations that help people transform</p>
              </div>
              <div className={styles.segment}>
                <h4>🙏 Spiritual Guidance</h4>
                <p>Religious leaders provide spiritual wisdom and encouragement</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Transformations</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Story: "From Street to Success"</h4>
                <p>The journey of a former street child who became a successful entrepreneur.</p>
              </div>
              <div className={styles.episode}>
                <h4>Story: "Healing from Trauma"</h4>
                <p>How one person overcame childhood trauma to build a fulfilling life.</p>
              </div>
              <div className={styles.episode}>
                <h4>Story: "Finding Faith"</h4>
                <p>A spiritual journey that transformed a life of despair into hope.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Support Resources</h2>
            <div className={styles.resources}>
              <h3>Help and Guidance</h3>
              <p>Each episode provides resources for viewers seeking similar transformations:</p>
              <ul>
                <li>Counseling services and contact information</li>
                <li>Support groups and meeting locations</li>
                <li>Rehabilitation centers and programs</li>
                <li>Educational opportunities and scholarships</li>
                <li>Spiritual guidance and religious organizations</li>
                <li>Community service organizations</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Expert Contributors</h2>
            <div className={styles.experts}>
              <h3>Professional Guidance</h3>
              <p>The show features various experts including:</p>
              <ul>
                <li>Psychologists and mental health professionals</li>
                <li>Life coaches and motivational speakers</li>
                <li>Spiritual leaders and counselors</li>
                <li>Social workers and community organizers</li>
                <li>Medical professionals and addiction specialists</li>
                <li>Education and career counselors</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Wednesday</p>
              <p><strong>Time:</strong> 7:00 PM - 8:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Thursday 1:00 PM, Sunday 9:00 AM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Find Your New Beginning</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Inspiring Stories</Link>
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
