import Link from 'next/link';
import styles from './page.module.css';

const newsArticles = [
    {
        id: 1,
        title: 'Ethio Business',
        titleAm: 'የኢትዮጵያ ቢዝነስ',
        excerpt: 'ኢትዮጵያ የቡና መገኛና የቡና አምራች ሀገር ሆና የሚገባትን የገበያ ድርሻ አለመያዟ ተደጋግሞ የሚነሳ ጉዳይ ሲሆን ለዚህም የተለያዩ ምክንያቶች ይጠቀሳሉ። የቡና ምርታችንን በማሻሻል ላይ እየተሰራ ነው።',
        category: 'Business',
        date: 'November 24, 2025',
        author: 'admin',
        featured: true,
    },
    {
        id: 2,
        title: 'የአየር መንገዱ የአቴንስ በረራ ከፍ ይላል ተባለ',
        titleEn: 'Ethiopian Airlines Athens Flights Increase',
        excerpt: 'Ethiopian Airlines announced plans to increase flight frequency to Athens, Greece. This expansion reflects growing demand for travel between Ethiopia and Greece.',
        category: 'International',
        date: 'September 18, 2024',
        author: 'Frehiwot',
        featured: false,
    },
    {
        id: 3,
        title: 'የኮቪድ ዳግም መከሰት',
        titleEn: 'COVID-19 Resurgence',
        excerpt: 'Health officials report new COVID-19 variants emerging in the region. Experts recommend continued vigilance and adherence to health guidelines.',
        category: 'Ethiopia',
        date: 'September 18, 2024',
        author: 'Frehiwot',
        featured: false,
    },
    {
        id: 4,
        title: 'የሰሞኑ ጉንፋን መሰል በሽታ',
        titleEn: 'Recent Flu-like Illness',
        excerpt: 'Recent flu-like illness spreading across the region requires attention from health authorities. Preventive measures are being recommended.',
        category: 'Health',
        date: 'September 18, 2024',
        author: 'Frehiwot',
        featured: false,
    },
    {
        id: 5,
        title: 'የኢትዮጵያ ኢኮኖሚ እድገት',
        titleEn: 'Ethiopian Economic Growth',
        excerpt: 'Ethiopia shows promising economic growth indicators in recent quarters. Various sectors contributing to national development.',
        category: 'Business',
        date: 'October 15, 2024',
        author: 'admin',
        featured: false,
    },
    {
        id: 6,
        title: 'አዲስ የትምህርት ፖሊሲ',
        titleEn: 'New Education Policy',
        excerpt: 'Ministry of Education announces new policy changes aimed at improving quality of education across the country.',
        category: 'Ethiopia',
        date: 'October 10, 2024',
        author: 'admin',
        featured: false,
    },
];

export default function NewsPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className={styles.gradient}>አዲስ ነገር</span> / Latest News
                    </h1>
                    <p className={styles.subtitle}>
                        Stay informed with the latest news from Ethiopia and around the world
                    </p>
                </div>
            </section>

            <section className={styles.newsSection}>
                <div className={styles.wrapper}>
                    <div className={styles.filters}>
                        <button className={`${styles.filterBtn} ${styles.active}`}>All News</button>
                        <button className={styles.filterBtn}>Business</button>
                        <button className={styles.filterBtn}>Ethiopia</button>
                        <button className={styles.filterBtn}>International</button>
                        <button className={styles.filterBtn}>Health</button>
                    </div>

                    <div className={styles.grid}>
                        {newsArticles.map((article) => (
                            <article key={article.id} className={`${styles.card} ${article.featured ? styles.featured : ''}`}>
                                <div className={styles.cardHeader}>
                                    <span className={`${styles.badge} ${styles[article.category.toLowerCase()]}`}>
                                        {article.category}
                                    </span>
                                    <time className={styles.date}>{article.date}</time>
                                </div>

                                <h3 className={styles.cardTitle}>{article.title}</h3>
                                {article.titleEn && (
                                    <p className={styles.titleAlt}>{article.titleEn}</p>
                                )}

                                <p className={styles.excerpt}>{article.excerpt}</p>

                                <div className={styles.cardFooter}>
                                    <div className={styles.author}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0 1.5a5.5 5.5 0 00-5.5 5.5h11a5.5 5.5 0 00-5.5-5.5z" />
                                        </svg>
                                        <span>By {article.author}</span>
                                    </div>
                                    <Link href={`/news/${article.id}`} className={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
