import Link from 'next/link';
import styles from '../../page.module.css';

export default function YeBetesebChewata() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Ye Beteseb Chewata / የቤተሰብ ጨዋታ</h1>
          <p className={styles.subtitle}>Family Fun and Entertainment</p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>About the Show</h2>
            <p>"Ye Beteseb Chewata" (Family Game) is EBS TV's exciting family game show that brings Ethiopian families together for fun challenges, laughter, and memorable moments.</p>
            <p>The show features families competing in various games, trivia, and challenges that test their knowledge, teamwork, and creativity while celebrating Ethiopian family values.</p>
          </div>

          <div className={styles.card}>
            <h2>Game Categories</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🧠 Knowledge & Trivia</h3>
                <p>Questions about Ethiopian culture, history, and general knowledge</p>
              </div>
              <div className={styles.feature}>
                <h3>🎭 Performance Challenges</h3>
                <p>Singing, dancing, and acting challenges for family members</p>
              </div>
              <div className={styles.feature}>
                <h3>🏃 Physical Games</h3>
                <p>Fun physical challenges and obstacle courses</p>
              </div>
              <div className={styles.feature}>
                <h3>🎨 Creative Tasks</h3>
                <p>Artistic challenges and creative problem-solving games</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>How the Show Works</h2>
            <div className={styles.gameStructure}>
              <div className={styles.round}>
                <h4>🎯 Round 1: Family Introduction</h4>
                <p>Families introduce themselves and share their unique stories</p>
              </div>
              <div className={styles.round}>
                <h4>🧠 Round 2: Knowledge Challenge</h4>
                <p>Trivia questions about Ethiopian culture and general knowledge</p>
              </div>
              <div className={styles.round}>
                <h4>🎭 Round 3: Performance Round</h4>
                <p>Families showcase their talents in singing, dancing, or acting</p>
              </div>
              <div className={styles.round}>
                <h4>🏆 Round 4: Final Challenge</h4>
                <p>Exciting final challenge to determine the winning family</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Prize Categories</h2>
            <div className={styles.prizeGrid}>
              <div className={styles.prize}>
                <h4>🏆 Grand Prize</h4>
                <p>Cash prize and family vacation package for the winning family</p>
              </div>
              <div className={styles.prize}>
                <h4>🥈 Second Place</h4>
                <p>Cash prize and gift packages for the runner-up family</p>
              </div>
              <div className={styles.prize}>
                <h4>🥉 Third Place</h4>
                <p>Gift packages and consolation prizes for third place</p>
              </div>
              <div className={styles.prize}>
                <h4>🎁 Participation Awards</h4>
                <p>Special gifts for all participating families</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Regular Features</h2>
            <div className={styles.segments}>
              <div className={styles.segment}>
                <h4>👨‍👩‍👧‍👦 Family Stories</h4>
                <p>Heartwarming stories about participating families</p>
              </div>
              <div className={styles.segment}>
                <h4>🎪 Special Challenges</h4>
                <p>Unique games tailored to each family's strengths</p>
              </div>
              <div className={styles.segment}>
                <h4>😂 Funny Moments</h4>
                <p>Highlighting the funniest and most memorable moments</p>
              </div>
              <div className={styles.segment}>
                <h4>📺 Audience Participation</h4>
                <p>Home viewers can play along and win prizes</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Recent Episodes</h2>
            <div className={styles.episodeGrid}>
              <div className={styles.episode}>
                <h4>Episode: "Teachers vs. Doctors Family Special"</h4>
                <p>Professional families compete in career-themed challenges.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Grandparents Special"</h4>
                <p>Multi-generational families showcase their wisdom and energy.</p>
              </div>
              <div className={styles.episode}>
                <h4>Episode: "Ethiopian New Year Celebration"</h4>
                <p>Special holiday episode with festive games and prizes.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>How to Participate</h2>
            <div className={styles.participation}>
              <h3>Join the Fun</h3>
              <p>Families interested in participating can:</p>
              <ul>
                <li>Apply through the EBS TV website</li>
                <li>Call the show's participation hotline</li>
                <li>Attend family game show auditions</li>
                <li>Follow social media announcements</li>
                <li>Be recommended by previous participants</li>
              </ul>
              
              <h3>Requirements</h3>
              <ul>
                <li>Family of 3-6 members</li>
                <li>At least one adult (18+) participant</li>
                <li>Good health and physical fitness</li>
                <li>Available for filming schedule</li>
                <li>Enthusiastic and entertaining personality</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Watch Schedule</h2>
            <div className={styles.schedule}>
              <p><strong>Day:</strong> Every Sunday</p>
              <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
              <p><strong>Channel:</strong> EBS TV</p>
              <p><strong>Repeats:</strong> Monday 7:00 PM, Saturday 10:00 AM</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Join the Family Fun</h2>
            <div className={styles.ctaButtons}>
              <Link href="https://live.ebstv.tv/" className={styles.button}>Watch Live</Link>
              <Link href="/contact" className={styles.buttonSecondary}>Apply to Participate</Link>
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
