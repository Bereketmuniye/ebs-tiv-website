import styles from './page.module.css';

const schedule = [
    {
        day: 'Monday',
        dayAm: 'ሰኞ',
        programs: [
            { time: '06:00 AM', title: 'Morning News', titleAm: 'የጠዋት ዜና' },
            { time: '09:00 AM', title: 'EBS Music', titleAm: 'ኢቢኤስ ሙዚቃ' },
            { time: '12:00 PM', title: 'Midday News', titleAm: 'የቀን ዜና' },
            { time: '03:00 PM', title: 'Entertainment Show', titleAm: 'የመዝናኛ ፕሮግራም' },
            { time: '06:00 PM', title: 'Evening News', titleAm: 'የምሽት ዜና' },
            { time: '08:00 PM', title: 'Prime Time Drama', titleAm: 'ዋና ሰዓት ድራማ' },
        ],
    },
    {
        day: 'Tuesday',
        dayAm: 'ማክሰኞ',
        programs: [
            { time: '06:00 AM', title: 'Morning News', titleAm: 'የጠዋት ዜና' },
            { time: '09:00 AM', title: 'Business Today', titleAm: 'ኢትዮ ቢዝነስ' },
            { time: '12:00 PM', title: 'Midday News', titleAm: 'የቀን ዜና' },
            { time: '03:00 PM', title: 'Music Videos', titleAm: 'የሙዚቃ ቪዲዮዎች' },
            { time: '06:00 PM', title: 'Evening News', titleAm: 'የምሽት ዜና' },
            { time: '08:00 PM', title: 'Documentary', titleAm: 'ዘጋቢ ፊልም' },
        ],
    },
    {
        day: 'Wednesday',
        dayAm: 'ረቡዕ',
        programs: [
            { time: '06:00 AM', title: 'Morning News', titleAm: 'የጠዋት ዜና' },
            { time: '09:00 AM', title: 'EBS Music', titleAm: 'ኢቢኤስ ሙዚቃ' },
            { time: '12:00 PM', title: 'Midday News', titleAm: 'የቀን ዜና' },
            { time: '03:00 PM', title: 'Tizitachin', titleAm: 'ትዝታችን' },
            { time: '06:00 PM', title: 'Evening News', titleAm: 'የምሽት ዜና' },
            { time: '08:00 PM', title: 'Special Feature', titleAm: 'ልዩ ፕሮግራም' },
        ],
    },
    {
        day: 'Thursday',
        dayAm: 'ሐሙስ',
        programs: [
            { time: '06:00 AM', title: 'Morning News', titleAm: 'የጠዋት ዜና' },
            { time: '09:00 AM', title: 'Business Update', titleAm: 'የቢዝነስ ዜና' },
            { time: '12:00 PM', title: 'Midday News', titleAm: 'የቀን ዜና' },
            { time: '03:00 PM', title: 'Besntu', titleAm: 'በስንቱ', highlight: true },
            { time: '06:00 PM', title: 'Evening News', titleAm: 'የምሽት ዜና' },
            { time: '08:00 PM', title: 'Drama Series', titleAm: 'ድራማ ተከታታይ' },
        ],
    },
    {
        day: 'Friday',
        dayAm: 'ዓርብ',
        programs: [
            { time: '06:00 AM', title: 'Morning News', titleAm: 'የጠዋት ዜና' },
            { time: '09:00 AM', title: 'EBS Music', titleAm: 'ኢቢኤስ ሙዚቃ' },
            { time: '12:00 PM', title: 'Midday News', titleAm: 'የቀን ዜና' },
            { time: '03:00 PM', title: 'Movie Premiere', titleAm: 'አዲስ ፊልም' },
            { time: '06:00 PM', title: 'Evening News', titleAm: 'የምሽት ዜና' },
            { time: '08:00 PM', title: 'Weekend Special', titleAm: 'የእሁድ ልዩ' },
        ],
    },
    {
        day: 'Saturday',
        dayAm: 'ቅዳሜ',
        programs: [
            { time: '08:00 AM', title: 'Weekend Morning', titleAm: 'የሳምንት መጨረሻ' },
            { time: '11:00 AM', title: 'Music Show', titleAm: 'የሙዚቃ ፕሮግራም' },
            { time: '02:00 PM', title: 'Sports Updates', titleAm: 'የስፖርት ዜና' },
            { time: '05:00 PM', title: 'Cultural Program', titleAm: 'የባህል ፕሮግራም' },
            { time: '07:00 PM', title: 'Evening Entertainment', titleAm: 'ምሽት መዝናኛ' },
            { time: '09:00 PM', title: 'Movie Night', titleAm: 'የፊልም ምሽት' },
        ],
    },
    {
        day: 'Sunday',
        dayAm: 'እሁድ',
        programs: [
            { time: '08:00 AM', title: 'Sunday Morning', titleAm: 'የእሁድ ጠዋት' },
            { time: '11:00 AM', title: 'Ye Beteseb Chewata', titleAm: 'የቤተሰብ ጨዋታ', highlight: true },
            { time: '02:00 PM', title: 'Family Movie', titleAm: 'የቤተሰብ ፊልም' },
            { time: '05:00 PM', title: 'Music Special', titleAm: 'የሙዚቃ ልዩ' },
            { time: '07:00 PM', title: 'Weekly Recap', titleAm: 'የሳምንት ማጠቃለያ' },
            { time: '09:00 PM', title: 'Drama Series', titleAm: 'ድራማ ተከታታይ' },
        ],
    },
];

export default function SchedulePage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Program <span className={styles.gradient}>Schedule</span>
                    </h1>
                    <p className={styles.subtitle}>
                        የፕሮግራም መርሃግብር / Weekly TV Schedule
                    </p>
                </div>
            </section>

            <section className={styles.scheduleSection}>
                <div className={styles.wrapper}>
                    <div className={styles.notice}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <p>All times are in East Africa Time (EAT). Schedule subject to change.</p>
                    </div>

                    {schedule.map((daySchedule, index) => (
                        <div key={index} className={styles.dayCard}>
                            <div className={styles.dayHeader}>
                                <h2 className={styles.dayTitle}>
                                    {daySchedule.day}
                                    <span className={styles.dayTitleAm}>{daySchedule.dayAm}</span>
                                </h2>
                            </div>

                            <div className={styles.programsList}>
                                {daySchedule.programs.map((program, pIndex) => (
                                    <div
                                        key={pIndex}
                                        className={`${styles.programItem} ${program.highlight ? styles.highlight : ''}`}
                                    >
                                        <div className={styles.time}>{program.time}</div>
                                        <div className={styles.programInfo}>
                                            <h3 className={styles.programTitle}>{program.title}</h3>
                                            <p className={styles.programTitleAm}>{program.titleAm}</p>
                                        </div>
                                        {program.highlight && (
                                            <span className={styles.highlightBadge}>Popular</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
