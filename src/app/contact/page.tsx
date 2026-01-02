'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting EBS TV! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Get in <span className={styles.gradient}>Touch</span>
                    </h1>
                    <p className={styles.subtitle}>
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.wrapper}>
                    {/* Contact Form */}
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    required
                                    rows={6}
                                    placeholder="Tell us more..."
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.infoContainer}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📧</div>
                            <h3 className={styles.infoTitle}>Email</h3>
                            <p className={styles.infoText}>contact@ebstv.tv</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📱</div>
                            <h3 className={styles.infoTitle}>SMS Updates</h3>
                            <p className={styles.infoText}>Send "A" to 7696</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>🌐</div>
                            <h3 className={styles.infoTitle}>Social Media</h3>
                            <p className={styles.infoText}>Follow us on YouTube</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📍</div>
                            <h3 className={styles.infoTitle}>Location</h3>
                            <p className={styles.infoText}>Addis Ababa, Ethiopia</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
