'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Category } from '@/lib/types';

const categoryIcon: Record<Category, string> = {
  watches: '◷',
  coins: '◎',
  glass: '◇',
  jewellery: '◈',
};

interface Props {
  category: Category;
  label: string;
  count: number;
  description: string;
}

export default function CategoryCard({ category, label, count, description }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/collections/${category}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        backgroundColor: 'white',
        border: '1px solid var(--color-mist)',
        borderRadius: '4px',
        padding: '36px 32px',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}>
        <div style={{
          fontSize: '1.75rem',
          color: hovered ? 'var(--color-forest)' : 'var(--color-mist)',
          marginBottom: '20px',
          transition: 'color 0.2s ease',
          lineHeight: 1,
        }}>
          {categoryIcon[category]}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 400,
          color: 'var(--color-charcoal)',
          marginBottom: '8px',
        }}>
          {label}
        </h3>

        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-bark)',
          lineHeight: 1.65,
          marginBottom: '24px',
        }}>
          {description}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
          }}>
            {count} {count === 1 ? 'piece' : 'pieces'}
          </span>
          <span style={{
            fontSize: '0.85rem',
            color: hovered ? 'var(--color-forest)' : 'var(--color-mist)',
            transition: 'color 0.2s ease',
          }}>
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
