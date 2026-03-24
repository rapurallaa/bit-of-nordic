import Link from 'next/link';
import { notFound } from 'next/navigation';
import { items, categoryMeta } from '@/lib/data';
import ItemCard from '@/components/ui/ItemCard';
import { Category } from '@/lib/types';

const validCategories: Category[] = ['watches', 'coins', 'glass', 'other'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: `${meta.label} — Bit of Nordic`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  if (!validCategories.includes(category as Category)) notFound();

  const meta = categoryMeta[category];
  if (!meta) notFound();

  const categoryItems = items.filter((i) => i.category === category);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px' }}>

      {/* Back */}
      <Link href="/collections" style={{
        fontSize: '0.75rem',
        color: 'var(--color-bark)',
        letterSpacing: '0.06em',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '48px',
      }}>
        ← All Collections
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '56px', borderBottom: '1px solid var(--color-mist)', paddingBottom: '48px' }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-bark)',
          marginBottom: '12px',
        }}>Collection</p>
        <h1 style={{ marginBottom: '16px' }}>{meta.label}</h1>
        <p style={{ color: 'var(--color-bark)', maxWidth: '520px', lineHeight: 1.75 }}>
          {meta.description}
        </p>
        <p style={{
          marginTop: '16px',
          fontSize: '0.8rem',
          color: 'var(--color-bark)',
        }}>
          {categoryItems.length} {categoryItems.length === 1 ? 'item' : 'items'}
        </p>
      </div>

      {/* Items grid */}
      {categoryItems.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {categoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--color-bark)', fontStyle: 'italic' }}>
          No items in this collection yet. Check back soon.
        </p>
      )}

    </main>
  );
}
