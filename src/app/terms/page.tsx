import Link from 'next/link';
import styles from '../page.module.css';

export default function Terms() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>Terms of use for EBS TV services</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using EBS TV services, you agree to be bound by these Terms and Conditions.</p>
            <p>These terms apply to all users of our website, mobile applications, and streaming services.</p>
          </div>

          <div className={styles.card}>
            <h2>Service Description</h2>
            <p>EBS TV provides:</p>
            <ul>
              <li>Live streaming television channels</li>
              <li>On-demand video content</li>
              <li>Program schedules and information</li>
              <li>News and entertainment content</li>
              <li>SMS notification services</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>User Responsibilities</h2>
            <p>As a user, you agree to:</p>
            <ul>
              <li>Provide accurate information when registering</li>
              <li>Use the service for personal, non-commercial purposes</li>
              <li>Not share account credentials with others</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to hack or disrupt our services</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Content and Copyright</h2>
            <p>All content on EBS TV is protected by copyright and other intellectual property laws.</p>
            <p>You may not:</p>
            <ul>
              <li>Reproduce or redistribute content without permission</li>
              <li>Create derivative works from our content</li>
              <li>Use content for commercial purposes</li>
              <li>Remove copyright notices or watermarks</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Privacy and Data</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
            <p>By using our services, you consent to the collection and use of data as described in our Privacy Policy.</p>
          </div>

          <div className={styles.card}>
            <h2>Service Availability</h2>
            <p>We strive to provide uninterrupted service but cannot guarantee 100% availability.</p>
            <p>Service may be temporarily unavailable for maintenance, updates, or technical issues beyond our control.</p>
          </div>

          <div className={styles.card}>
            <h2>Limitation of Liability</h2>
            <p>EBS TV shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.</p>
            <p>Your use of our services is at your own risk.</p>
          </div>

          <div className={styles.card}>
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
            <p>Continued use of our services constitutes acceptance of any changes.</p>
          </div>

          <div className={styles.backLink}>
            <Link href="/" className={styles.button}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
