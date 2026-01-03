import Link from 'next/link';
import styles from '../page.module.css';

export default function SMSGuide() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>SMS Guide</h1>
          <p className={styles.subtitle}>Get EBS TV updates directly on your phone</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>How to Subscribe</h2>
            <p>Stay updated with EBS TV programming, news, and special announcements through our SMS service.</p>
            
            <div className={styles.instructionBox}>
              <h3>Simple Steps:</h3>
              <ol>
                <li>Open your SMS messaging app</li>
                <li>Create a new message</li>
                <li>Type the letter "A"</li>
                <li>Send to <strong>7696</strong></li>
              </ol>
            </div>

            <div className={styles.features}>
              <h3>What you'll receive:</h3>
              <ul>
                <li>Daily program schedules</li>
                <li>Breaking news alerts</li>
                <li>Special show announcements</li>
                <li>Exclusive content updates</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Service Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h4>Cost</h4>
                <p>Standard SMS rates apply</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Frequency</h4>
                <p>2-3 messages per day</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Unsubscribe</h4>
                <p>Send "STOP" to 7696</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Help</h4>
                <p>Send "HELP" to 7696</p>
              </div>
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
