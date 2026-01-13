import React, { useState } from 'react';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [selectedLists, setSelectedLists] = useState({
        news: true,
        security: false,
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const lists = {
        news: {
            uuid: translate({
                id: 'newsletter.list.news.uuid',
                message: '90163d3c-64bb-4910-aa3e-dd71e0944cf6',
            }),
            label: <Translate id="newsletter.list.news">General News</Translate>,
        },
        security: {
            uuid: translate({
                id: 'newsletter.list.security.uuid',
                message: '57977cb6-60a6-465b-98f0-0b626847ed0d',
            }),
            label: <Translate id="newsletter.list.security">Security Updates</Translate>,
        },
    };

    const handleCheckboxChange = (listKey) => {
        setSelectedLists((prev) => ({
            ...prev,
            [listKey]: !prev[listKey],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uuids = Object.keys(selectedLists)
            .filter((key) => selectedLists[key])
            .map((key) => lists[key].uuid);

        if (uuids.length === 0) {
            setStatus('error');
            setMessage(
                translate({
                    id: 'newsletter.error.noList',
                    message: 'Please select at least one list.',
                })
            );
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('https://lists.goldendoglinux.org/api/public/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    name: '',
                    list_uuids: uuids,
                    confirm: true,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setMessage(
                    translate({
                        id: 'newsletter.success.message',
                        message: 'Thanks for subscribing! Please check your email to confirm.',
                    })
                );
            } else {
                const data = await response.json();
                setStatus('error');
                setMessage(
                    data.message ||
                    translate({
                        id: 'newsletter.error.generic',
                        message: 'Something went wrong. Please try again.',
                    })
                );
            }
        } catch (err) {
            setStatus('error');
            setMessage(
                translate({
                    id: 'newsletter.error.network',
                    message: 'Failed to connect to the subscription service. Please check your connection or CORS settings.',
                })
            );
        }
    };

    return (
        <div className={styles.newsletterContainer}>
            <div className={styles.newsletterCard}>
                <h3>
                    <Translate id="newsletter.title">Join our Newsletter</Translate>
                </h3>
                <p>
                    <Translate id="newsletter.description">
                        Stay updated with the latest releases, security updates, and community news.
                    </Translate>
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder={translate({
                                id: 'newsletter.placeholder',
                                message: 'your@email.com',
                            })}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                            disabled={status === 'loading' || status === 'success'}
                        />
                        <button
                            type="submit"
                            className={styles.button}
                            disabled={status === 'loading' || status === 'success'}
                        >
                            {status === 'loading' ? (
                                <Translate id="newsletter.loading">Subscribing...</Translate>
                            ) : status === 'success' ? (
                                <Translate id="newsletter.success">Done!</Translate>
                            ) : (
                                <Translate id="newsletter.button">Subscribe</Translate>
                            )}
                        </button>
                    </div>
                    <div className={styles.checkboxGroup}>
                        {Object.keys(lists).map((key) => (
                            <label key={key} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={selectedLists[key]}
                                    onChange={() => handleCheckboxChange(key)}
                                    disabled={status === 'loading' || status === 'success'}
                                />
                                <span className={styles.checkboxText}>{lists[key].label}</span>
                            </label>
                        ))}
                    </div>
                </form>
                {message && (
                    <p className={status === 'error' ? styles.errorMessage : styles.successMessage}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}
