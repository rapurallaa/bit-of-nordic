import Link from 'next/link';
import { notFound } from 'next/navigation';
import { items, categoryMeta } from '@/lib/data';
import ItemCard from '@/components/ui/ItemCard';

export async function generateStaticParams() {
  return items.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = items.find((i) => i.id === id);
  if (!item) return {};
  return {
    title: `${item.name} — Bit of Nordic`,
    description: item.description.slice(0, 160),
  };
}

const categoryLabels: Record<string, string> = {
  watches: 'Watches',
  coins: 'Coins',
  glass: 'Design Glass',
  other: 'Other',
};

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = items.find((i) => i.id === id);
  if (!item) notFound();

  const related = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 2);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px' }}>

      {/* Back */}
      <Link href={`/collections/${item.category}`} style={{
        fontSize: '0.75rem',
        color: 'var(--color-bark)',
        letterSpacing: '0.06em',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '48px',
      }}>
        ← {categoryLabels[item.category]}
      </Link>

      {/* Item detail */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        marginBottom: '80px',
      }}>

        {/* Left — image */}
        <div>
          <div style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--color-linen)',
            border: '1px solid var(--color-mist)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {item.images[0] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
              />
            ) : (
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
              }}>
                Image coming soon
              </p>
            )}
          </div>

          {/* Thumbnail strip (future use) */}
          {item.images.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {item.images.map((src, i) => (
                <div key={i} style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid var(--color-mist)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — details */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Category badge */}
          <span style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-forest-light)',
            color: 'var(--color-forest)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '6px 12px',
            borderRadius: '2px',
            alignSelf: 'flex-start',
            marginBottom: '24px',
          }}>
            {categoryLabels[item.category]}
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            color: 'var(--color-charcoal)',
            marginBottom: '12px',
            lineHeight: 1.15,
          }}>
            {item.name}
          </h1>

          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-bark)',
            marginBottom: '32px',
          }}>
            {item.era} · {item.origin}
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--color-stone)',
            lineHeight: 1.85,
            marginBottom: '36px',
          }}>
            {item.description}
          </p>

          {/* Price */}
          {item.price && !item.sold && (
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--color-amber)',
              fontWeight: 400,
              marginBottom: '32px',
            }}>
              € {item.price.toLocaleString()}
            </p>
          )}

          {item.sold && (
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-bark)',
              fontStyle: 'italic',
              marginBottom: '32px',
            }}>
              This piece has been sold.
            </p>
          )}

          {/* CTA */}
          {!item.sold && (
            <Link href="/contact" style={{
              backgroundColor: 'var(--color-forest)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
            }}>
              Enquire About This Piece
            </Link>
          )}

        </div>
      </div>

      {/* Related items */}
      {related.length > 0 && (
        <div style={{ borderTop: '1px solid var(--color-mist)', paddingTop: '64px' }}>
          <h2 style={{ marginBottom: '36px' }}>More from {categoryLabels[item.category]}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {related.map((r) => (
              <ItemCard key={r.id} item={r} />
            ))}
          </div>
        </div>
      )}

    </main>
  );
}
