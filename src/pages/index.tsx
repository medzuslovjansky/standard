import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/home.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <h1>Medžuslovjansky</h1>
      <p className={styles.tagline}>
        A language understood by 400 million Slavic speakers — without prior study.
      </p>
      <div className={styles.buttons}>
        <Link className="button button--primary button--lg" to="/learn">
          Start Learning
        </Link>
        <Link className="button button--secondary button--lg" to="/explore">
          Join the Community
        </Link>
      </div>
    </header>
  );
}

function Cards() {
  const cards = [
    {
      title: 'Explore',
      description: 'Try reading Interslavic, discover community projects, media, and events.',
      link: '/explore',
      linkLabel: 'Explore →',
    },
    {
      title: 'Learn',
      description: 'Guides for Slavic and non-Slavic speakers, FAQ, and comparisons.',
      link: '/learn',
      linkLabel: 'Start learning →',
    },
    {
      title: 'Standard',
      description: 'The normative specification of the Interslavic language.',
      link: '/standard',
      linkLabel: 'Read the standard →',
    },
    {
      title: 'Develop',
      description: 'Dictionary API, transliterator, spellcheck — tools and ways to contribute.',
      link: '/develop',
      linkLabel: 'Get started →',
    },
    {
      title: 'About',
      description: 'History of the language, research, governance, and press kit.',
      link: '/about',
      linkLabel: 'Learn more →',
    },
    {
      title: 'News',
      description: 'Latest updates from the Interslavic language community.',
      link: '/blog',
      linkLabel: 'Read news →',
    },
  ];

  return (
    <section className={styles.cards}>
      {cards.map((card) => (
        <div key={card.title} className={styles.card}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Link to={card.link}>{card.linkLabel}</Link>
        </div>
      ))}
    </section>
  );
}

function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineHeading}>Milestones</h2>
      <div className={styles.timeline}>
      <div className={styles.milestone}>
        <Link to="/explore/movies/the-painted-bird" className={styles.milestoneLink}>
          <span className={styles.milestoneYear}>2019</span>
          <span className={styles.milestoneTitle}>The Painted Bird</span>
          <span className={styles.milestoneDesc}>Interslavic dialogue in a major motion picture, premiered at the Venice Film Festival</span>
        </Link>
      </div>
      <div className={styles.milestone}>
        <a href="https://iso639-3.sil.org/code/isv" className={styles.milestoneLink} target="_blank" rel="noopener noreferrer">
          <span className={styles.milestoneYear}>2024</span>
          <span className={styles.milestoneTitle}>ISO 639-3</span>
          <span className={styles.milestoneDesc}>Interslavic registered as language code <code>isv</code></span>
        </a>
      </div>
      <div className={styles.milestone}>
        <Link to="/explore/books/nehaj-nesut-nas-bele-oblaky" className={styles.milestoneLink}>
          <span className={styles.milestoneYear}>2025</span>
          <span className={styles.milestoneTitle}>Nehaj Nesut Nas Běle Oblaky</span>
          <span className={styles.milestoneDesc}>First original novel written entirely in Interslavic</span>
        </Link>
      </div>
      </div>
      <p className={styles.timelineAfter}>
        Since 2017, the annual CISLa conference has brought together linguists and enthusiasts from across the Slavic world. 50,000+ subscribers follow Interslavic on YouTube, 20,000+ on Facebook, and the Discord server grows every day. New books, translations, and songs appear every year. Interslavic lives because people use it — and we are proud of everyone who helps the language grow.
      </p>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="Interslavic — a language understood across the Slavic world">
      <main>
        <Hero />
        <Cards />
        <Timeline />
      </main>
    </Layout>
  );
}
