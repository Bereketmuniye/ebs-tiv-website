import styles from './PlatformLinks.module.css';

const platforms = [
    {
        id: 1,
        icon: '📺',
        name: 'DSTV',
        description: 'Watch on Channel 365',
        link: '#',
    },
    {
        id: 2,
        icon: '🛰️',
        name: 'EthioSat',
        description: 'Watch in HD',
        link: '#',
    },
    {
        id: 3,
        icon: '📱',
        name: 'Roku',
        description: 'Install the app',
        link: '/roku',
    },
    {
        id: 4,
        icon: '▶️',
        name: 'YouTube',
        description: 'Subscribe now',
        link: 'https://youtube.com',
    },
    {
        id: 5,
        icon: '💬',
        name: 'SMS Updates',
        description: 'Send A to 7696',
        link: '#',
    },
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

                <div className={styles.grid}>
                    {platforms.map((platform, index) => (
                        <a
                            key={platform.id}
                            href={platform.link}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
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
        </section>
    );
}
