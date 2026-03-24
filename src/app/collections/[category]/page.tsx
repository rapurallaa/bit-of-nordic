import { notFound } from 'next/navigation';
import { getItemsByCategory, categoryMeta } from '@/lib/data';
import ItemCard from '@/components/ui/ItemCard';
import { Category } from '@/lib/types';

const validCategories: Category[] = ['watches', 'coins', 'glass', 'jewellery'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = categoryMeta[category as Category];
  if (!meta) return {};
  return {
    title: `${meta.label} — Bit of Nordic`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  if (!validCategories.includes(category as Category)) notFound();

  const cat = category as Category;
  const meta = categoryMeta[cat];
  const categoryItems = getItemsByCategory(cat);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>

      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-bark)',
          marginBottom: '12px',
        }}>
          Collections
        </p>
        <h1 style={{ marginBottom: '16px' }}>{meta.label}</h1>
        <p style={{
          fontSize: '1rem',
          color: 'var(--color-stone)',
          maxWidth: '520px',
          lineHeight: 1.8,
          marginBottom: '12px',
        }}>
          {meta.description}
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--color-bark)',
          letterSpacing: '0.04em',
        }}>
          {categoryItems.length} {categoryItems.length === 1 ? 'piece' : 'pieces'}
          {categoryItems.filter(i => i.sold).length > 0
            ? ` · ${categoryItems.filter(i => i.sold).length} sold`
            : ''}
        </p>
      </div>

      {/* Item grid */}
      {categoryItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 40px',
          color: 'var(--color-bark)',
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '12px' }}>
            Coming soon
          </p>
          <p style={{ fontSize: '0.85rem' }}>Items are being added to this collection.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '24px',
        }}>
          {categoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

    </main>
  );
}
