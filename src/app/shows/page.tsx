import Link from 'next/link';
import styles from './page.module.css';

const shows = [
    {
        id: 1,
        title: 'በስንቱ',
        titleEn: 'Besntu',
        description: 'Popular Ethiopian drama series that airs every Thursday at 3:00 PM. A compelling story that has captured the hearts of Ethiopian audiences nationwide.',
        schedule: 'Thursday 3:00 PM',
        category: 'Drama',
        status: 'New Episodes',
    },
    {
        id: 2,
        title: 'ትዝታችን',
        titleEn: 'Tizitachin',
        description: 'A nostalgic journey through Ethiopian memories, culture, and heritage. Bringing back cherished moments and celebrating our shared history.',
        schedule: 'Weekly',
        category: 'Entertainment',
        status: 'Ongoing',
    },
    {
        id: 3,
        title: 'የቤተሰብ ጨዋታ',
        titleEn: 'Ye Beteseb Chewata',
        description: 'Fun family game show that brings Ethiopian families together for exciting challenges and heartwarming moments.',
        schedule: 'Sundays',
        category: 'Game Show',
        status: 'Popular',
    },
    {
        id: 4,
        title: 'EBS Music',
        titleEn: 'Reggae & Afro Beat',
        description: 'The best of Ethiopian and African music content featuring reggae and afro beat performances and interviews.',
        schedule: 'Daily',
        category: 'Music',
        status: 'Daily Show',
    },
    {
        id: 5,
        title: 'Ethio Business',
        titleEn: 'Business News',
        description: 'Comprehensive coverage of Ethiopian business news, market updates, and economic developments.',
        schedule: 'Weekdays',
        category: 'Business',
        status: 'Live',
    },
    {
        id: 6,
        title: 'የዕለት ዜና',
        titleEn: 'Daily News',
        description: 'Stay informed with the latest news from Ethiopia and around the world. Comprehensive news coverage you can trust.',
        schedule: 'Daily',
        category: 'News',
        status: 'Live',
    },
];

export default function ShowsPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Our <span className={styles.gradient}>Shows</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Discover the best Ethiopian TV shows, series, and programs
                    </p>
                </div>
            </section>

            <section className={styles.showsSection}>
                <div className={styles.wrapper}>
                    <div className={styles.filters}>
                        <button className={`${styles.filterBtn} ${styles.active}`}>All Shows</button>
                        <button className={styles.filterBtn}>Drama</button>
                        <button className={styles.filterBtn}>Entertainment</button>
                        <button className={styles.filterBtn}>News</button>
                        <button className={styles.filterBtn}>Music</button>
                    </div>

                    <div className={styles.grid}>
                        {shows.map((show) => (
                            <div key={show.id} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <div className={styles.imagePlaceholder}>
                                        <div className={styles.playOverlay}>
                                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.2)" />
                                                <path d="M24 18L44 32L24 46V18Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.badges}>
                                        <span className={styles.categoryBadge}>{show.category}</span>
                                        <span className={styles.statusBadge}>{show.status}</span>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>
                                        {show.title}
                                        <span className={styles.titleEn}>{show.titleEn}</span>
                                    </h3>
                                    <p className={styles.cardDescription}>{show.description}</p>

                                    <div className={styles.schedule}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                            <path d="M9 0a9 9 0 100 18A9 9 0 009 0zm0 16.5A7.5 7.5 0 119 1.5a7.5 7.5 0 010 15z" />
                                            <path d="M9 4v5.5l3.5 3.5.7-.7L9.5 8.6V4H9z" />
                                        </svg>
                                        <span>{show.schedule}</span>
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <Link href={`/shows/${show.id}`} className={styles.watchBtn}>
                                        Watch Episodes
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
