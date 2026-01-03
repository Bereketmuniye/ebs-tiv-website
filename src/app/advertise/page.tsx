import Link from 'next/link';
import styles from '../page.module.css';

export default function Advertise() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Advertise Here</h1>
          <p className={styles.subtitle}>Reach Millions with EBS TV</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Why Advertise with EBS TV?</h2>
            <p>EBS TV is Ethiopia's leading television network, reaching millions of viewers across the country and diaspora.</p>
            <p>Partner with us to showcase your brand to a diverse, engaged audience that trusts EBS for quality entertainment, news, and cultural programming.</p>
          </div>

          <div className={styles.card}>
            <h2>Our Reach</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>📺 Television Audience</h3>
                <p>Millions of viewers across Ethiopia through DSTV Channel 365 and EthioSat</p>
              </div>
              <div className={styles.feature}>
                <h3>🌐 Online Platform</h3>
                <p>Thousands of daily visitors to our website and live streaming platform</p>
              </div>
              <div className={styles.feature}>
                <h3>📱 Mobile Apps</h3>
                <p>Growing mobile audience through our iOS and Android applications</p>
              </div>
              <div className={styles.feature}>
                <h3>🌍 Diaspora</h3>
                <p>Ethiopian communities worldwide through our international streaming</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Advertising Opportunities</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>📺 Television Commercials</h4>
                <p>30-second and 60-second commercial spots during prime time and regular programming</p>
              </div>
              <div className={styles.segment}>
                <h4>🎬 Program Sponsorship</h4>
                <p>Sponsor popular shows like 20-30, Discover Ethiopia, and Ethio Business</p>
              </div>
              <div className={styles.segment}>
                <h4>🌐 Digital Advertising</h4>
                <p>Banner ads, video ads, and sponsored content on our website and apps</p>
              </div>
              <div className={styles.segment}>
                <h4>📱 Social Media</h4>
                <p>Promoted posts and campaigns across our social media platforms</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Popular Programs for Sponsorship</h2>
            <div className={styles.showGrid}>
              <div className={styles.show}>
                <h4>20 – 30 / ሀያ – ሰላሳ</h4>
                <p>Prime time talk show for young adults - High engagement</p>
              </div>
              <div className={styles.show}>
                <h4>Discover Ethiopia</h4>
                <p>Cultural and tourism program - Family audience</p>
              </div>
              <div className={styles.show}>
                <h4>Ethio Business</h4>
                <p>Business and economic news - Professional audience</p>
              </div>
              <div className={styles.show}>
                <h4>Ehudin be EBS</h4>
                <p>Sunday entertainment show - Family viewing</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Targeting Options</h2>
            <div className={styles.targeting}>
              <h3>Precise Audience Targeting</h3>
              <p>We offer various targeting options to maximize your advertising ROI:</p>
              <ul>
                <li>Demographic targeting (age, gender, income)</li>
                <li>Geographic targeting (regions, cities, urban/rural)</li>
                <li>Time-based targeting (prime time, specific hours)</li>
                <li>Program-specific targeting (show genres)</li>
                <li>Behavioral targeting (viewing patterns)</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Pricing Packages</h2>
            <div className={styles.pricingGrid}>
              <div className={styles.package}>
                <h4>🌱 Starter Package</h4>
                <p>Perfect for small businesses and startups</p>
                <ul>
                  <li>10 commercial spots per week</li>
                  <li>Basic digital banner placement</li>
                  <li>Social media mentions</li>
                </ul>
              </div>
              <div className={styles.package}>
                <h4>🚀 Growth Package</h4>
                <p>Ideal for expanding businesses</p>
                <ul>
                  <li>25 commercial spots per week</li>
                  <li>Program sponsorship opportunities</li>
                  <li>Digital advertising campaign</li>
                </ul>
              </div>
              <div className={styles.package}>
                <h4>⭐ Premium Package</h4>
                <p>Maximum exposure for established brands</p>
                <ul>
                  <li>50+ commercial spots per week</li>
                  <li>Prime show sponsorships</li>
                  <li>Multi-platform campaign</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Our Advertisers</h2>
            <div className={styles.advertisers}>
              <h3>Trusted by Leading Brands</h3>
              <p>We partner with Ethiopia's most successful companies and international brands looking to reach the Ethiopian market:</p>
              <ul>
                <li>Banking and Financial Institutions</li>
                <li>Telecommunication Companies</li>
                <li>Automotive Industry</li>
                <li>Consumer Goods and FMCG</li>
                <li>Real Estate and Construction</li>
                <li>Technology and IT Services</li>
                <li>Hospitality and Tourism</li>
                <li>Education and Training</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Get Started</h2>
            <div className={styles.process}>
              <h3>Simple Advertising Process</h3>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <h4>1. Consultation</h4>
                  <p>Discuss your advertising goals and budget with our team</p>
                </div>
                <div className={styles.step}>
                  <h4>2. Strategy Development</h4>
                  <p>Create a customized advertising plan for your brand</p>
                </div>
                <div className={styles.step}>
                  <h4>3. Creative Production</h4>
                  <p>Develop compelling advertisements (if needed)</p>
                </div>
                <div className={styles.step}>
                  <h4>4. Campaign Launch</h4>
                  <p>Launch your advertising campaign across selected platforms</p>
                </div>
                <div className={styles.step}>
                  <h4>5. Performance Tracking</h4>
                  <p>Monitor and report on campaign effectiveness</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Ready to Grow Your Business?</h2>
            <p>Contact our advertising team today to discuss how EBS TV can help you reach your target audience effectively.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.button}>Contact Sales Team</Link>
              <Link href="/smsguide" className={styles.buttonSecondary}>Download Media Kit</Link>
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
