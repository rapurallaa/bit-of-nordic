'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
  label: string;
  count: number;
  description: string;
}

export default function CategoryCard({ category, label, count, description }: CategoryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/collections/${category}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article style={{
        backgroundColor: hovered ? 'white' : 'var(--color-linen)',
        border: '1px solid var(--color-mist)',
        borderRadius: '4px',
        padding: '36px',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: hovered ? 'var(--shadow-md)' : 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: 400,
            color: 'var(--color-charcoal)',
            marginBottom: '16px',
          }}>
            {label}
          </h3>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-stone)',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}>
            {description}
          </p>

          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-bark)',
            letterSpacing: '0.06em',
            marginBottom: '28px',
          }}>
            {count} {count === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: hovered ? 'var(--color-forest)' : 'var(--color-stone)',
          fontSize: '0.8rem',
          letterSpacing: '0.06em',
          transition: 'color 0.2s ease',
        }}>
          <span>Browse collection</span>
          <span style={{ fontSize: '1rem' }}>→</span>
        </div>

      </article>
    </Link>
  );
}
