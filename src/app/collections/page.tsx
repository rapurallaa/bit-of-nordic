import { items, categoryMeta } from '@/lib/data';
import ItemCard from '@/components/ui/ItemCard';
import CategoryCard from '@/components/ui/CategoryCard';
import { Category } from '@/lib/types';

const categories: Category[] = ['watches', 'coins', 'glass'];

export const metadata = {
  title: 'Collections — Bit of Nordic',
  description: 'Browse the full collection of vintage Nordic watches, coins and design glass.',
};

export default function CollectionsPage() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px' }}>

      {/* Header */}
      <div style={{ marginBottom: '64px', borderBottom: '1px solid var(--color-mist)', paddingBottom: '48px' }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-bark)',
          marginBottom: '12px',
        }}>All Collections</p>
        <h1 style={{ marginBottom: '16px' }}>The Collection</h1>
        <p style={{ color: 'var(--color-bark)', maxWidth: '520px', lineHeight: 1.75 }}>
          Vintage Nordic objects gathered over many years — each one chosen for its history, craft, and connection to Nordic making traditions.
        </p>
      </div>

      {/* Category cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '80px',
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

      {/* All items */}
      <div style={{ borderTop: '1px solid var(--color-mist)', paddingTop: '64px' }}>
        <h2 style={{ marginBottom: '40px' }}>All Items</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

    </main>
  );
}
