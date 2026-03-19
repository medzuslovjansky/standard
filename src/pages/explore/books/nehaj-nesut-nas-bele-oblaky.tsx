import React from 'react';
import Layout from '@theme/Layout';
import styles from './nehaj-nesut-nas-bele-oblaky.module.css';

const LULU_LATIN =
  'https://www.lulu.com/shop/aleksy-bernat-and-s-v-sofienczuk-wojczyszyn-and-matija-ćutić-and-justyna-orlikowska/nehaj-nesut-nas-běle-oblaky/hardcover/product-rmrpqjy.html';
const LULU_CYRILLIC =
  'https://www.lulu.com/shop/алексиј-бернат-and-сергѣй-викторъ-софіенчукъ-войчишинъ-and-матија-ћутић-and-justyna-orlikowska/нехај-несут-нас-бєле-облакы/hardcover/product-kvd6yek.html';

const chapters = [
  'K čitatelju', 'Prědgovor', 'Prolog',
  'I. Věčna Zima', 'II. Biznesy grada', 'III. Posrěd dožda',
  'IV. Ty jesi mi spadla iz neba!', 'V. V tamtu stranu', 'VI. Srasty',
  'VII. Jolamyro', 'VIII. Do cělja', 'IX. Izrva okovana ledom',
  'X. Iskry i blěsk', 'XI. Črvenost v naturalnoj obsrědině',
  'XII. Kogo ja byh tam privedl?', 'XIII. Nebodar', 'XIV. Livady',
  'XV. Bělozorje v sněgu', 'XVI. Naša naděja', 'XVII. Slušaj, slušaj',
  'XVIII. Tajemny Putnik', 'XIX. Kniga i bukvy', 'XX. Plači, Jolamyro',
  'XXI. S poezijeju na ustah', 'XXII. Kletva Mraza', 'XXIII. Mračna put',
  'XXIV. Jih dolja, jih sudba', 'XXV. Pojdeš li ty?', 'XXVI. Madāru',
  'Epilog',
];

const contributors = [
  { role: 'Author', name: 'Aleksy Bernat' },
  { role: 'Foreword', name: 'Matija Ćutić' },
  { role: 'Illustrator', name: 'S.-V. Sofienczuk-Wojczyszyn' },
  { role: 'Managing editor', name: 'Jaroslav Sergějev' },
  { role: 'Drawings', name: 'Justyna Orlikowska' },
  { role: 'Drawings', name: 'Stjepan Melša' },
  { role: 'Drawings', name: 'Lea Anić' },
  { role: 'Drawings', name: 'Anton Stupivcev' },
  { role: 'Cover design', name: 'Leon Ning' },
];

export default function Nehaj(): React.JSX.Element {
  return (
    <Layout
      title="Nehaj Nesut Nas Běle Oblaky"
      description="The first novel written entirely in modern Interslavic — available in Latin and Cyrillic script"
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroCovers}>
            <img
              src="/img/book/both-covers.svg"
              alt="Both editions — Latin and Cyrillic — side by side"
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              <span>Nehaj Nesut Nas Běle Oblaky</span>
              <span className={styles.titleCyrillic}>Нехај Несут Нас Бєле Облакы</span>
            </h1>
            <p className={styles.tagline}>One story. Two scripts. Every Slav can read it.</p>
            <p className={styles.author}>
              by <strong>Aleksy Bernat</strong> · foreword by <strong>Matija Ćutić</strong>
            </p>
            <p className={styles.meta}>Hardcover · 368 pages · A5 · EUR 15.99</p>
          </div>
        </section>

        {/* Opening quote */}
        <section className={styles.quote}>
          <blockquote lang="isv">
            <p>
              Ljudi govoret, že v tamtoj denj bylo veliko spokojno. Čisto nebo bylo jasno,
              a oblaky šli pomalo, nesene legkym větrom. Ptice, ktore sut ješče ne poletěli
              do Raja, pěvali krasno posrěd žolto-oranževyh drěv.
            </p>
          </blockquote>
        </section>

        {/* Blurb */}
        <section className={styles.blurb}>
          <h2>About the book</h2>
          <p>
            Before your eyes — the first novel written entirely in modern Interslavic.
            And it's not just a book — it's a <strong>historic precedent</strong>.
          </p>
          <p>
            Anyone who knows a single Slavic language holds the key to a fantastic world
            where heroes need not only sword and bow, but strong will and a good heart.
          </p>
          <p>
            A night on the streets of Kamenograd binds two souls — homeless, restless,
            connected by their troubles. Young hunter Nahoslav has one chance to save his
            native village from the Eternal Winter — a mysterious climatic anomaly bringing
            cold and hunger.
          </p>
          <p>
            In search of a solution, he meets a girl. Mad. Lost. From an unknown land. She
            speaks of a winged people who know magic against the cold. And only time will
            show whether salvation will be worse than the curse.
          </p>
        </section>

        {/* Edition picker */}
        <section className={styles.editions}>
          <h2>Izberite svoje pismo · Choose your script</h2>
          <div className={styles.editionGrid}>
            <div className={styles.editionCard}>
              <img src="https://assets.lulu.com/cover_thumbs/r/m/rmrpqjy-front-shortedge-384.jpg" alt="Latin script edition cover" />
              <h3>Latinica</h3>
              <p className={styles.sample}>
                „Ljudi govoret, že v tamtoj denj bylo veliko spokojno…"
              </p>
              <p className={styles.isbn}>ISBN 9781326064518</p>
              <p className={styles.editionPrice}>EUR 15.99</p>
              <a
                className="button button--primary button--lg"
                href={LULU_LATIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Latinica
              </a>
            </div>
            <div className={styles.editionCard}>
              <img src="https://assets.lulu.com/cover_thumbs/k/v/kvd6yek-front-shortedge-384.jpg" alt="Cyrillic script edition cover" />
              <h3>Кирилица</h3>
              <p className={styles.sample}>
                „Људи говорет, же в тамтој денј было велико спокојно…"
              </p>
              <p className={styles.isbn}>ISBN 9781326129491</p>
              <p className={styles.editionPrice}>EUR 15.99</p>
              <a
                className="button button--primary button--lg"
                href={LULU_CYRILLIC}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Кирилица
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className={styles.gallery}>
          <h2>Inside the book</h2>
          <div className={styles.galleryGrid}>
            <img src="/img/book/book-open-latin.svg" alt="Latin edition open spread" />
            <img src="/img/book/book-open-cyrillic.svg" alt="Cyrillic edition open spread" />
            <img src="/img/book/book-detail.svg" alt="Illustration detail close-up" />
          </div>
        </section>

        {/* Table of Contents */}
        <section className={styles.toc}>
          <h2>Table of Contents</h2>
          <ol className={styles.chapterList}>
            {chapters.map((ch) => (
              <li key={ch}>{ch}</li>
            ))}
          </ol>
        </section>

        {/* Contributors */}
        <section className={styles.contributors}>
          <h2>Contributors</h2>
          <div className={styles.contributorGrid}>
            {contributors.map((c) => (
              <div key={`${c.role}-${c.name}`} className={styles.contributor}>
                <span className={styles.role}>{c.role}</span>
                <span className={styles.name}>{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Details */}
        <section className={styles.specs}>
          <h2>Details</h2>
          <div className={styles.specsGrid}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Format</span>
              <span className={styles.specValue}>Hardcover</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Pages</span>
              <span className={styles.specValue}>368</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Size</span>
              <span className={styles.specValue}>A5</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Illustrations</span>
              <span className={styles.specValue}>43</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Interior</span>
              <span className={styles.specValue}>B&amp;W</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Published</span>
              <span className={styles.specValue}>2025</span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.cta}>
          <p>Usually printed in 3–5 business days.</p>
          <div className={styles.ctaButtons}>
            <a
              className="button button--primary button--lg"
              href={LULU_LATIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Latinica — EUR 15.99
            </a>
            <a
              className="button button--outline button--primary button--lg"
              href={LULU_CYRILLIC}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Кирилица — EUR 15.99
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
