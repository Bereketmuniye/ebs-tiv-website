import Image from 'next/image';
import Link from 'next/link';
import styles from './ShowsGrid.module.css';

const shows = [
    {
        id: '20-30',
        title: '20 – 30',
        titleEn: 'ሀያ – ሰላሳ',
        description: 'Popular youth show focusing on the 20-30 age demographic',
        category: 'Youth Show',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #2D882D, #FBB917)'
    },
    {
        id: 'discover-ethiopia',
        title: 'Discover Ethiopia',
        titleEn: 'ኢትዮጵያን እንወቅ',
        description: 'Explore the beauty, culture, and heritage of Ethiopia',
        category: 'Documentary',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #FBB917, #DA121A)'
    },
    {
        id: 'ebs-sport',
        title: 'EBS Sport',
        titleEn: 'ኢቢኤስ ስፖርት',
        description: 'Comprehensive sports coverage and analysis',
        category: 'Sports',
        schedule: 'Daily',
        gradient: 'linear-gradient(135deg, #DA121A, #2D882D)'
    },
    {
        id: 'ehudin-be-ebs',
        title: 'Ehudin be EBS',
        titleEn: 'እሁድን በኢቢኤስ',
        description: 'Sunday special programming and entertainment',
        category: 'Entertainment',
        schedule: 'Sunday',
        gradient: 'linear-gradient(135deg, #2D882D, #DA121A)'
    },
    {
        id: 'ethio-business',
        title: 'Ethio Business',
        titleEn: 'ኢትዮ ቢዝነስ',
        description: 'Business news and economic analysis',
        category: 'Business',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #FBB917, #2D882D)'
    },
    {
        id: 'ethiopis',
        title: 'Ethiopis',
        titleEn: 'ኢትዮጲስ',
        description: 'Cultural and social issues discussion program',
        category: 'Talk Show',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #DA121A, #FBB917)'
    },
    {
        id: 'helen-show',
        title: 'Helen Show',
        titleEn: 'ሄለን ሾው',
        description: 'Talk show hosted by Helen with celebrity interviews',
        category: 'Talk Show',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #2D882D, #FBB917)'
    },
    {
        id: 'kidamen-keseat',
        title: 'Kidamen keseat',
        titleEn: 'ቅዳሜን ከሰዓት',
        description: 'Weekend morning show with news and entertainment',
        category: 'Weekend Show',
        schedule: 'Saturday',
        gradient: 'linear-gradient(135deg, #FBB917, #DA121A)'
    },
    {
        id: 'new-life',
        title: 'New Life',
        titleEn: 'አዲስ ሂወት',
        description: 'Inspirational and lifestyle programming',
        category: 'Lifestyle',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #DA121A, #2D882D)'
    },
    {
        id: 'seyifu-on-ebs',
        title: 'Seyifu On EBS',
        titleEn: 'ሰይፉ በኢቢኤስ',
        description: 'Entertainment show hosted by Seyifu',
        category: 'Entertainment',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #2D882D, #FBB917)'
    },
    {
        id: 'tech-talk-with-solomon',
        title: 'Tech Talk With Solomon',
        titleEn: '',
        description: 'Technology discussions and digital trends',
        category: 'Technology',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #FBB917, #DA121A)'
    },
    {
        id: 'tizitachin',
        title: 'Tizitachin',
        titleEn: 'ትዝታችን',
        description: 'Nostalgic journey through Ethiopian memories',
        category: 'Entertainment',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #DA121A, #2D882D)'
    },
    {
        id: 'ye-beteseb-chewata',
        title: 'Ye beteseb Chewata',
        titleEn: 'የቤተሰብ ጨዋታ',
        description: 'Family game show bringing families together',
        category: 'Game Show',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #2D882D, #FBB917)'
    },
    {
        id: 'ebs-music-reggae-afro-beat',
        title: 'Ebs Music reggae & Afro Beat',
        titleEn: 'ኢቢኤስ ሙዚቃ ሬጌ እና አፍሮ ቢት',
        description: 'The best of Ethiopian reggae and Afrobeat music',
        category: 'Music',
        schedule: 'Weekly',
        gradient: 'linear-gradient(135deg, #FBB917, #DA121A)'
    }
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
                                <div className={styles.imagePlaceholder} style={{background: show.gradient}}>
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
