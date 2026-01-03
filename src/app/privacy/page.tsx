import Link from 'next/link';
import styles from '../page.module.css';

export default function Privacy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>Your privacy is important to us</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Information We Collect</h2>
            <p>At EBS TV, we are committed to protecting your personal information and privacy.</p>
            
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact details when you register</li>
              <li>Email address for newsletter subscriptions</li>
              <li>Phone number for SMS services</li>
              <li>Viewing preferences and watch history</li>
            </ul>

            <h3>Technical Information</h3>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Cookies and tracking data</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide our streaming services</li>
              <li>Send program updates and notifications</li>
              <li>Improve our services and user experience</li>
              <li>Communicate with you about our services</li>
              <li>Analyze viewing patterns and preferences</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal information with third parties. We may share information only when:</p>
            <ul>
              <li>Required by law or legal process</li>
              <li>To protect our rights and property</li>
              <li>With service providers who assist our operations</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </div>

          <div className={styles.backLink}>
            <Link href="/" className={styles.button}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
