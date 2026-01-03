import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

const shows = [
    {
        id: '20-30',
        title: '20 – 30',
        titleEn: 'ሀያ – ሰላሳ',
        description: 'Popular youth show focusing on the 20-30 age demographic',
        category: 'Youth Show',
        schedule: 'Weekly',
        videoId: 'KJ_u-RgpFNc',
        fullDescription: '20-30 is EBS TV\'s flagship youth program that addresses the interests, challenges, and aspirations of young Ethiopians aged 20-30. The show features discussions on contemporary issues, career guidance, lifestyle segments, and entertainment tailored for the millennial and Gen Z demographics.'
    },
    {
        id: 'discover-ethiopia',
        title: 'Discover Ethiopia',
        titleEn: 'ኢትዮጵያን እንወቅ',
        description: 'Explore the beauty, culture, and heritage of Ethiopia',
        category: 'Documentary',
        schedule: 'Weekly',
        videoId: 'yBbbAJoy4Bg',
        fullDescription: 'Discover Ethiopia takes viewers on an immersive journey through Ethiopia\'s diverse landscapes, ancient history, vibrant cultures, and modern developments. Each episode explores different regions, historical sites, cultural practices, and natural wonders that make Ethiopia unique.'
    },
    {
        id: 'ebs-sport',
        title: 'EBS Sport',
        titleEn: 'ኢቢኤስ ስፖርት',
        description: 'Comprehensive sports coverage and analysis',
        category: 'Sports',
        schedule: 'Daily',
        videoId: '8-7UrEvvgHQ',
        fullDescription: 'EBS Sport provides comprehensive coverage of Ethiopian and international sports, including football, athletics, basketball, and emerging sports. The show features live match analysis, player interviews, sports news, and in-depth discussions on sports development in Ethiopia.'
    },
    {
        id: 'ehudin-be-ebs',
        title: 'Ehudin be EBS',
        titleEn: 'እሁድን በኢቢኤስ',
        description: 'Sunday special programming and entertainment',
        category: 'Entertainment',
        schedule: 'Sunday',
        videoId: 'Y-imVXeRtWw',
        fullDescription: 'Ehudin be EBS is EBS TV\'s signature Sunday program that combines entertainment, cultural discussions, celebrity interviews, and special features. The show brings together popular segments, guest performances, and engaging content for weekend family viewing.'
    },
    {
        id: 'ethio-business',
        title: 'Ethio Business',
        titleEn: 'ኢትዮ ቢዝነስ',
        description: 'Business news and economic analysis',
        category: 'Business',
        schedule: 'Weekly',
        videoId: 'hhiuFM2n8r4',
        fullDescription: 'Ethio Business delivers comprehensive coverage of Ethiopian business news, market trends, economic policies, and entrepreneurial success stories. The show features interviews with business leaders, analysis of market developments, and insights into investment opportunities in Ethiopia.'
    },
    {
        id: 'ethiopis',
        title: 'Ethiopis',
        titleEn: 'ኢትዮጲስ',
        description: 'Cultural and social issues discussion program',
        category: 'Talk Show',
        schedule: 'Weekly',
        videoId: '8-7UrEvvgHQ',
        fullDescription: 'Ethiopis is a thought-provoking talk show that addresses contemporary social, cultural, and political issues affecting Ethiopian society. The program features expert panelists, audience participation, and in-depth analysis of current events and their impact on Ethiopian life.'
    },
    {
        id: 'helen-show',
        title: 'Helen Show',
        titleEn: 'ሄለን ሾው',
        description: 'Talk show hosted by Helen with celebrity interviews',
        category: 'Talk Show',
        schedule: 'Weekly',
        videoId: 'yBbbAJoy4Bg',
        fullDescription: 'The Helen Show is a popular talk show featuring celebrity interviews, lifestyle discussions, and entertainment segments. Hosted by the charismatic Helen, the show brings together Ethiopian celebrities, artists, and influencers for engaging conversations and performances.'
    },
    {
        id: 'kidamen-keseat',
        title: 'Kidamen keseat',
        titleEn: 'ቅዳሜን ከሰዓት',
        description: 'Weekend morning show with news and entertainment',
        category: 'Weekend Show',
        schedule: 'Saturday',
        videoId: 'KJ_u-RgpFNc',
        fullDescription: 'Kidamen Keseat is EBS TV\'s weekend morning show that combines news updates, entertainment segments, cultural features, and lifestyle content. The program provides a perfect start to Saturday with informative and engaging content for the whole family.'
    },
    {
        id: 'new-life',
        title: 'New Life',
        titleEn: 'አዲስ ሂወት',
        description: 'Inspirational and lifestyle programming',
        category: 'Lifestyle',
        schedule: 'Weekly',
        videoId: 'Y-imVXeRtWw',
        fullDescription: 'New Life is an inspirational lifestyle program that focuses on personal development, health, wellness, and positive living. The show features success stories, expert advice on healthy living, relationship guidance, and motivational content to help viewers improve their quality of life.'
    },
    {
        id: 'seyifu-on-ebs',
        title: 'Seyifu On EBS',
        titleEn: 'ሰይፉ በኢቢኤስ',
        description: 'Entertainment show hosted by Seyifu',
        category: 'Entertainment',
        schedule: 'Weekly',
        videoId: 'hhiuFM2n8r4',
        fullDescription: 'Seyifu on EBS is a late-night entertainment show hosted by renowned comedian Seyifu Fantahun. The program features celebrity interviews, comedy sketches, musical performances, and satirical commentary on current events and social issues.'
    },
    {
        id: 'tech-talk-with-solomon',
        title: 'Tech Talk With Solomon',
        titleEn: '',
        description: 'Technology discussions and digital trends',
        category: 'Technology',
        schedule: 'Weekly',
        videoId: '8-7UrEvvgHQ',
        fullDescription: 'Tech Talk with Solomon explores the latest technology trends, digital innovations, and their impact on Ethiopian society. The show covers topics like mobile technology, internet trends, startup ecosystems, and digital transformation across various sectors.'
    },
    {
        id: 'tizitachin',
        title: 'Tizitachin',
        titleEn: 'ትዝታችን',
        description: 'Nostalgic journey through Ethiopian memories',
        category: 'Entertainment',
        schedule: 'Weekly',
        videoId: 'yBbbAJoy4Bg',
        fullDescription: 'Tizitachin (Our Memories) is a nostalgic program that takes viewers on a heartfelt journey through Ethiopia\'s collective memory. The show celebrates historical moments, cultural heritage, music, and personal stories that have shaped Ethiopian identity.'
    },
    {
        id: 'ye-beteseb-chewata',
        title: 'Ye beteseb Chewata',
        titleEn: 'የቤተሰብ ጨዋታ',
        description: 'Family game show bringing families together',
        category: 'Game Show',
        schedule: 'Weekly',
        videoId: 'KJ_u-RgpFNc',
        fullDescription: 'Ye Beteseb Chewata is a family-friendly game show that brings Ethiopian families together for fun challenges, trivia, and entertainment. The program features traditional games, modern competitions, and activities that promote family bonding and cultural values.'
    },
    {
        id: 'ebs-music-reggae-afro-beat',
        title: 'Ebs Music reggae & Afro Beat',
        titleEn: 'ኢቢኤስ ሙዚቃ ሬጌ እና አፍሮ ቢት',
        description: 'The best of Ethiopian reggae and Afrobeat music',
        category: 'Music',
        schedule: 'Weekly',
        videoId: 'Y-imVXeRtWw',
        fullDescription: 'EBS Music Reggae & Afro Beat showcases the best of Ethiopian and international reggae and Afrobeat music. The program features music videos, artist interviews, live performances, and discussions about the influence of these genres on Ethiopian music culture.'
    }
];

export async function generateStaticParams() {
    return shows.map((show) => ({
        id: show.id,
    }));
}

export default async function ShowPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const show = shows.find((s) => s.id === id);

    if (!show) {
        notFound();
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/shows" className={styles.backLink}>
                        ← Back to Shows
                    </Link>
                    <div className={styles.showInfo}>
                        <span className={styles.category}>{show.category}</span>
                        <h1 className={styles.title}>
                            {show.title}
                            <span className={styles.titleEn}>{show.titleEn}</span>
                        </h1>
                        <p className={styles.schedule}>{show.schedule}</p>
                    </div>
                </div>

                <div className={styles.videoSection}>
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
                </div>

                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <div className={styles.description}>
                            <h2>About the Show</h2>
                            <p>{show.fullDescription}</p>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailCard}>
                                <h3>Show Information</h3>
                                <div className={styles.infoGrid}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.label}>Category:</span>
                                        <span className={styles.value}>{show.category}</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.label}>Schedule:</span>
                                        <span className={styles.value}>{show.schedule}</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.label}>Channel:</span>
                                        <span className={styles.value}>EBS TV</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <Link 
                                    href={`https://www.youtube.com/watch?v=${show.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primaryBtn}
                                >
                                    Watch on YouTube
                                </Link>
                                <Link href="https://live.ebstv.tv/" className={styles.secondaryBtn}>
                                    Watch Live TV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
