import Link from 'next/link';
import { items, categoryMeta } from '@/lib/data';
import ItemCard from '@/components/ui/ItemCard';
import CategoryCard from '@/components/ui/CategoryCard';
import { Category } from '@/lib/types';

const categories: Category[] = ['watches', 'coins', 'glass'];

export default function HomePage() {
  const featuredItems = items.filter((i) => i.featured).slice(0, 3);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '96px 40px 88px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '48px',
          height: '1px',
          backgroundColor: 'var(--color-mist)',
          margin: '0 auto 40px',
        }} />

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
          color: 'var(--color-charcoal)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '760px',
          margin: '0 auto 28px',
        }}>
          A Curated Collection<br />
          <em>of Nordic Vintage</em>
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-bark)',
          maxWidth: '460px',
          margin: '0 auto 48px',
          lineHeight: 1.75,
        }}>
          Watches, coins, and design glass gathered over decades from across the Nordic region.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/collections" style={{
            backgroundColor: 'var(--color-forest)',
            color: 'white',
            padding: '14px 36px',
            borderRadius: '2px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Explore Collections
          </Link>
          <Link href="/about" style={{
            backgroundColor: 'transparent',
            color: 'var(--color-stone)',
            padding: '13px 36px',
            border: '1px solid var(--color-mist)',
            borderRadius: '2px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Our Story
          </Link>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section style={{
        backgroundColor: 'var(--color-birch)',
        borderTop: '1px solid var(--color-mist)',
        borderBottom: '1px solid var(--color-mist)',
        padding: '72px 40px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
            marginBottom: '10px',
          }}>Browse</p>
          <h2 style={{ marginBottom: '36px' }}>By Category</h2>

          {/* Fixed 3-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '20px',
          }}>
            {categories.map((cat) => {
              const count = items.filter((i) => i.category === cat).length;
              const meta = categoryMeta[cat];
              return (
                <CategoryCard
                  key={cat}
                  category={cat}
                  label={meta.label}
                  count={count}
                  description={meta.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Recent Additions ── */}
      <section style={{ padding: '72px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
            marginBottom: '10px',
          }}>Latest</p>
          <h2 style={{ marginBottom: '36px' }}>Recent Additions</h2>

          {/* Fixed 3-column equal grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}>
            {featuredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/collections" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-forest)',
              textDecoration: 'none',
            }}>
              View All Items →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story Teaser ── */}
      <section style={{
        backgroundColor: 'var(--color-linen)',
        borderTop: '1px solid var(--color-mist)',
        padding: '72px 40px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'center',
        }}
        className="grid-2col">

          {/* Left — text */}
          <div>
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-bark)',
              marginBottom: '12px',
            }}>The Collection</p>
            <h2 style={{ marginBottom: '24px' }}>Crafted to Last,<br />Found by Chance</h2>
            <p style={{
              color: 'var(--color-stone)',
              lineHeight: 1.85,
              marginBottom: '20px',
              fontSize: '0.95rem',
            }}>
              Nordic craftspeople have long understood that good design is not decoration — it is function made beautiful. Every piece in this collection was made to be used, to endure, and to carry meaning beyond its material value.
            </p>
            <p style={{
              color: 'var(--color-stone)',
              lineHeight: 1.85,
              marginBottom: '32px',
              fontSize: '0.95rem',
            }}>
              These objects have passed through many hands before arriving here. A watch worn daily for forty years. A coin that crossed borders. A vase that has stood on a windowsill in Helsinki through four decades of seasons.
            </p>
            <Link href="/about" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-forest)',
              textDecoration: 'none',
            }}>
              Read More →
            </Link>
          </div>

          {/* Right — pull quote */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid var(--color-mist)',
            borderRadius: '4px',
            padding: '48px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{
              width: '32px',
              height: '2px',
              backgroundColor: 'var(--color-forest)',
              marginBottom: '32px',
            }} />
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-charcoal)',
              lineHeight: 1.45,
              margin: 0,
            }}>
              &ldquo;Objects that survive are never ordinary. They are the ones that were made with care — and kept with the same.&rdquo;
            </blockquote>
            <p style={{
              marginTop: '28px',
              fontSize: '0.7rem',
              color: 'var(--color-bark)',
              letterSpacing: '0.08em',
            }}>
              — On collecting
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
