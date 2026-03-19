import React from 'react';
import Layout from '@theme/Layout';
import styles from './the-painted-bird.module.css';

const AMAZON_LINK =
  'https://www.amazon.com/Painted-Bird-Blu-ray-Václav-Marhoul/dp/B0FPGDMGT2';

const cast = [
  { actor: 'Petr Kotlár' },
  { actor: 'Udo Kier' },
  { actor: 'Lech Dyblik' },
];

export default function ThePaintedBird(): React.JSX.Element {
  return (
    <Layout
      title="The Painted Bird"
      description="The Painted Bird (2019) — a major motion picture with dialogue in Interslavic, directed by Václav Marhoul"
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroPoster}>
            <img
              src="/img/movies/the-painted-bird-poster.svg"
              alt="The Painted Bird movie poster"
            />
          </div>
          <div className={styles.heroText}>
            <h1>The Painted Bird</h1>
            <p className={styles.titleOriginal}>Nabarvené ptáče</p>
            <p className={styles.tagline}>
              A landmark film — and the first time Interslavic was heard by millions.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>Venice Film Festival 2019</span>
              <span className={styles.badge}>Czech Oscar Candidate 2020</span>
              <span className={styles.badge}>Interslavic dialogue</span>
            </div>
            <p className={styles.meta}>
              Directed by <strong>Václav Marhoul</strong> · Based on the novel by <strong>Jerzy Kosiński</strong>
            </p>
            <p className={styles.meta}>2019 · 169 min · Black &amp; white · 35mm</p>
          </div>
        </section>

        {/* About */}
        <section className={styles.about}>
          <h2>About the film</h2>
          <p>
            Based on Jerzy Kosiński's acclaimed novel, <em>The Painted Bird</em> follows a young boy
            wandering through the primitive Eastern European countryside at the bloody close of World War II.
            Entrusted by his persecuted parents to an elderly foster mother who soon dies, the boy is left
            on his own — moving from village to farmhouse, enduring extraordinary brutality from superstitious
            peasants and witnessing the terrifying violence of soldiers, both Russian and German.
          </p>
          <p>
            Director Václav Marhoul spent over a decade bringing the film to the screen. To create a language
            that would sound authentically Slavic without belonging to any specific nation — matching the
            novel's deliberately unspecified Eastern European setting — he chose <strong>Interslavic</strong>.
          </p>
        </section>

        {/* Why Interslavic */}
        <section className={styles.interslavic}>
          <h2>Why Interslavic?</h2>
          <p>
            Kosiński's novel deliberately avoids naming any country or language. The setting is a composite —
            a mythologized, universal Slavic countryside. Using any real Slavic language would have
            broken that universality and risked offending the nation portrayed.
          </p>
          <p>
            Interslavic solved this perfectly: a language that sounds natural and familiar to any Slavic
            speaker, yet belongs to no single nation. Audiences across the Slavic world reported
            understanding the dialogue without subtitles — exactly the effect the director intended.
          </p>
          <p>
            The film's premiere at the 76th Venice Film Festival in September 2019 brought Interslavic
            to international attention for the first time, reaching millions of viewers worldwide.
          </p>
        </section>

        {/* Cast */}
        <section className={styles.castSection}>
          <h2>Starring</h2>
          <div className={styles.castGrid}>
            {cast.map((c) => (
              <div key={c.actor} className={styles.castMember}>
                <span className={styles.actorName}>{c.actor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Details bar */}
        <section className={styles.specs}>
          <h2>Details</h2>
          <div className={styles.specsGrid}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Director</span>
              <span className={styles.specValue}>Václav Marhoul</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Runtime</span>
              <span className={styles.specValue}>169 min</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Format</span>
              <span className={styles.specValue}>35mm B&amp;W</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Language</span>
              <span className={styles.specValue}>Interslavic</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Year</span>
              <span className={styles.specValue}>2019</span>
            </div>
          </div>
        </section>

        {/* Bonus features */}
        <section className={styles.bonus}>
          <h2>Blu-ray bonus features</h2>
          <ul>
            <li><em>11 Colours of the Bird</em> — feature-length making-of documentary</li>
            <li>Audio commentary with writer and researcher Jonathan Owen</li>
            <li>Video interview with director Václav Marhoul (Breaking the 180 podcast)</li>
            <li><em>The Painted Bird: A Video Essay</em> by filmmaker Salvador Carrasco</li>
            <li>Booklet featuring new writing by film critic Anton Bitel</li>
          </ul>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <a
            className="button button--primary button--lg"
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Blu-ray on Amazon
          </a>
        </section>
      </main>
    </Layout>
  );
}
