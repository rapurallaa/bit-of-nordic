import { items, categoryMeta } from '@/lib/data';
import CategoryCard from '@/components/ui/CategoryCard';
import { Category } from '@/lib/types';

export const metadata = {
  title: 'Collections — Bit of Nordic',
  description: 'Browse vintage Nordic watches, coins, design glass, and jewellery.',
};

const categories: Category[] = ['watches', 'coins', 'glass', 'jewellery'];

export default function CollectionsPage() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>

      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-bark)',
        marginBottom: '12px',
      }}>Collections</p>

      <h1 style={{ marginBottom: '16px' }}>The Collection</h1>

      <p style={{
        fontSize: '1rem',
        color: 'var(--color-stone)',
        maxWidth: '560px',
        lineHeight: 1.8,
        marginBottom: '56px',
      }}>
        Vintage Nordic objects gathered over many years — each one chosen for its history, craft, and connection to Nordic making traditions.
      </p>

      {/* 2×2 category grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '24px',
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

    </main>
  );
}
