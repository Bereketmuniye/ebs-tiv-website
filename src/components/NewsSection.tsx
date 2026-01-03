import Link from 'next/link';
import styles from './NewsSection.module.css';

const newsArticles = [
    {
        id: 'ethio-business',
        title: 'Ethio Business',
        titleAm: 'ኢትዮ ቢዝነስ',
        excerpt: 'ኢትዮጵያ የቡና መገኛና የቡና አምራች ሀገር ሆና የሚገባትን የገበያ ድርሻ አለመያዟ ተደጋግሞ የሚነሳ ጉዳይ...',
        category: 'Business',
        date: 'November 24, 2025',
        author: 'admin',
        featured: true
    },
    {
        id: 'ethiopian-airlines-athens',
        title: 'የአየር መንገዱ የአቴንስ በረራ ከፍ ይላል ተባለ',
        excerpt: 'Ethiopian Airlines is set to increase flight frequency to Athens as demand grows...',
        category: 'International',
        date: 'September 18, 2024',
        author: 'Frehiwot'
    },
    {
        id: 'covid-variants',
        title: 'የኮቪድ ዳግም መከሰት',
        excerpt: 'Health officials report new COVID-19 variants emerging in the region...',
        category: 'Health',
        date: 'September 18, 2024',
        author: 'Frehiwot'
    },
    {
        id: 'flu-illness',
        title: 'የሰሞኑ ጉንፋን መሰል በሽታ',
        excerpt: 'Recent flu-like illness spreading across the region requires attention...',
        category: 'Health',
        date: 'September 18, 2024',
        author: 'Frehiwot'
    }
];

export default function NewsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <span className={styles.gradient}>አዲስ ነገር</span> / What's New
                    </h2>
                    <p className={styles.subtitle}>
                        Stay updated with the latest news from Ethiopia and around the world
                    </p>
                </div>

                <div className={styles.newsLayout}>
                    {/* Featured Article */}
                    {newsArticles.filter(article => article.featured).map((article) => (
                        <article key={article.id} className={styles.featuredArticle}>
                            <div className={styles.featuredContent}>
                                <div className={styles.articleMeta}>
                                    <span className={`${styles.badge} ${styles[article.category.toLowerCase()]}`}>
                                        {article.category}
                                    </span>
                                    <time className={styles.date}>{article.date}</time>
                                </div>
                                
                                <h3 className={styles.featuredTitle}>{article.title}</h3>
                                {article.titleAm && (
                                    <p className={styles.titleAm}>{article.titleAm}</p>
                                )}
                                
                                <p className={styles.excerpt}>{article.excerpt}</p>
                                
                                <div className={styles.articleFooter}>
                                    <span className={styles.author}>By {article.author}</span>
                                    <Link href={`/news/${article.id}`} className={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                    
                    {/* Other Articles */}
                    <div className={styles.otherArticles}>
                        {newsArticles.filter(article => !article.featured).map((article, index) => (
                            <article
                                key={article.id}
                                className={styles.card}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={`${styles.badge} ${styles[article.category.toLowerCase()]}`}>
                                        {article.category}
                                    </span>
                                    <time className={styles.date}>{article.date}</time>
                                </div>

                                <h3 className={styles.cardTitle}>{article.title}</h3>
                                {article.titleAm && (
                                    <p className={styles.titleAm}>{article.titleAm}</p>
                                )}

                                <p className={styles.excerpt}>{article.excerpt}</p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.author}>By {article.author}</span>
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

                <div className={styles.viewAll}>
                    <Link href="/news" className={styles.viewAllBtn}>
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    );
}
