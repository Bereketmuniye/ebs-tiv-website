import Image from 'next/image';
import Link from 'next/link';
import styles from './ShowsGrid.module.css';

const shows = [
    {
        id: 1,
        title: 'በስንቱ',
        titleEn: 'Besntu',
        description: 'Popular Ethiopian drama series airing every Thursday at 3:00 PM',
        schedule: 'Thursday 3:00 PM',
        category: 'Drama',
    },
    {
        id: 2,
        title: 'ትዝታችን',
        titleEn: 'Tizitachin',
        description: 'A nostalgic journey through Ethiopian memories and culture',
        category: 'Entertainment',
    },
    {
        id: 3,
        title: 'የቤተሰብ ጨዋታ',
        titleEn: 'Ye Beteseb Chewata',
        description: 'Fun family game show bringing families together',
        category: 'Game Show',
    },
    {
        id: 4,
        title: 'EBS Music',
        titleEn: 'Reggae & Afro Beat',
        description: 'The best of Ethiopian and African music content',
        category: 'Music',
    },
];

export default function ShowsGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Popular <span className={styles.gradient}>Shows</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Catch your favorite Ethiopian TV shows
                    </p>
                </div>

                <div className={styles.grid}>
                    {shows.map((show, index) => (
                        <div
                            key={show.id}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardImage}>
                                <div className={styles.imagePlaceholder}>
                                    <div className={styles.playOverlay}>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)" />
                                            <path d="M18 14L34 24L18 34V14Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <span className={styles.category}>{show.category}</span>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {show.title}
                                    <span className={styles.titleEn}>{show.titleEn}</span>
                                </h3>
                                <p className={styles.cardDescription}>{show.description}</p>
                                {show.schedule && (
                                    <div className={styles.schedule}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5A6.5 6.5 0 118 1.5a6.5 6.5 0 010 13z" />
                                            <path d="M8 3.5v4.793l3.354 3.353.707-.707L8.5 7.379V3.5H8z" />
                                        </svg>
                                        {show.schedule}
                                    </div>
                                )}
                            </div>

                            <div className={styles.cardFooter}>
                                <Link href={`/shows/${show.id}`} className={styles.watchBtn}>
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Link href="/shows" className={styles.viewAllBtn}>
                        View All Shows
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
