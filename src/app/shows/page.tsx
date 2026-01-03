import Link from 'next/link';
import styles from './page.module.css';

const shows = [
    {
        id: '20-30',
        title: '20 – 30',
        titleEn: 'ሀያ – ሰላሳ',
        description: 'Popular youth show focusing on the 20-30 age demographic',
        schedule: 'Weekly',
        category: 'Youth Show',
        status: 'Popular',
        videoId: 'KJ_u-RgpFNc'
    },
    {
        id: 'discover-ethiopia',
        title: 'Discover Ethiopia',
        titleEn: 'ኢትዮጵያን እንወቅ',
        description: 'Explore the beauty, culture, and heritage of Ethiopia',
        schedule: 'Weekly',
        category: 'Documentary',
        status: 'New Episodes',
        videoId: 'yBbbAJoy4Bg'
    },
    {
        id: 'ebs-sport',
        title: 'EBS Sport',
        titleEn: 'ኢቢኤስ ስፖርት',
        description: 'Comprehensive sports coverage and analysis',
        schedule: 'Daily',
        category: 'Sports',
        status: 'Live',
        videoId: '8-7UrEvvgHQ'
    },
    {
        id: 'ehudin-be-ebs',
        title: 'Ehudin be EBS',
        titleEn: 'እሁድን በኢቢኤስ',
        description: 'Sunday special programming and entertainment',
        schedule: 'Sunday',
        category: 'Entertainment',
        status: 'Popular',
        videoId: 'Y-imVXeRtWw'
    },
    {
        id: 'ethio-business',
        title: 'Ethio Business',
        titleEn: 'ኢትዮ ቢዝነስ',
        description: 'Business news and economic analysis',
        schedule: 'Weekly',
        category: 'Business',
        status: 'Live',
        videoId: 'hhiuFM2n8r4'
    },
    {
        id: 'tizitachin',
        title: 'Tizitachin',
        titleEn: 'ትዝታችን',
        description: 'Nostalgic journey through Ethiopian memories',
        schedule: 'Weekly',
        category: 'Entertainment',
        status: 'Ongoing',
        videoId: 'yBbbAJoy4Bg'
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
                                    <div className={styles.videoContainer}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${show.videoId}`}
                                            title={show.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={styles.video}
                                        />
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
