import styles from './PlatformLinks.module.css';

const platforms = [
    {
        id: 'youtube',
        icon: '▶️',
        name: 'YouTube',
        description: 'Watch EBS on YouTube',
        link: 'https://youtube.com/@ebstvethiopia',
        featured: true
    },
    {
        id: 'roku',
        icon: '📱',
        name: 'Roku',
        description: 'GET ROKU & WATCH EBS TV LIVE IN YOUR COUNTRY',
        link: '/roku',
        featured: true
    },
    {
        id: 'dstv',
        icon: '📺',
        name: 'DSTV',
        description: 'Watch on Channel 365',
        link: '#',
    },
    {
        id: 'ethiosat',
        icon: '🛰️',
        name: 'EthioSat',
        description: 'Watch in HD',
        link: '#',
    },
    {
        id: 'live-stream',
        icon: '🌐',
        name: 'EBS Live',
        description: 'Watch Live Streaming',
        link: 'https://live.ebstv.tv/',
    },
    {
        id: 'sms',
        icon: '💬',
        name: 'SMS Guide',
        description: 'Send A to 7696',
        link: '/smsguide',
    }
];

export default function PlatformLinks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Watch <span className={styles.gradient}>Anywhere</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Stream EBS TV on your favorite platform
                    </p>
                </div>

                <div className={styles.platformsGrid}>
                    {/* Featured Platforms */}
                    <div className={styles.featuredPlatforms}>
                        {platforms.filter(platform => platform.featured).map((platform, index) => (
                            <a
                                key={platform.id}
                                href={platform.link}
                                className={styles.featuredCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.featuredIcon}>{platform.icon}</div>
                                <div className={styles.featuredContent}>
                                    <h3 className={styles.featuredName}>{platform.name}</h3>
                                    <p className={styles.featuredDescription}>{platform.description}</p>
                                </div>
                                <div className={styles.arrow}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                    {/* Other Platforms */}
                    <div className={styles.otherPlatforms}>
                        {platforms.filter(platform => !platform.featured).map((platform, index) => (
                            <a
                                key={platform.id}
                                href={platform.link}
                                className={styles.card}
                                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                            >
                                <div className={styles.icon}>{platform.icon}</div>
                                <h3 className={styles.platformName}>{platform.name}</h3>
                                <p className={styles.description}>{platform.description}</p>
                                <div className={styles.arrow}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
