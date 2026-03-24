'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Item } from '@/lib/types';

const categoryLabels: Record<string, string> = {
  watches: 'Watches',
  coins: 'Coins',
  glass: 'Design Glass',
  other: 'Other',
};

export default function ItemCard({ item }: { item: Item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/item/${item.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article style={{
        border: '1px solid var(--color-mist)',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
      }}>

        {/* Image area */}
        <div style={{
          aspectRatio: '4/3',
          backgroundColor: 'var(--color-linen)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {item.images[0] ? (
            <Image
              src={item.images[0]}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-mist)',
            }}>
              {categoryLabels[item.category]}
            </span>
          )}

          {/* Sold badge */}
          {item.sold && (
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'var(--color-charcoal)',
              color: 'white',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '2px',
            }}>
              Sold
            </div>
          )}
        </div>

        {/* Details */}
        <div style={{ padding: '20px' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
            marginBottom: '8px',
          }}>
            {categoryLabels[item.category]}
          </p>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 400,
            color: 'var(--color-charcoal)',
            marginBottom: '6px',
            lineHeight: 1.2,
          }}>
            {item.name}
          </h3>

          <p style={{
            fontSize: '0.8rem',
            color: 'var(--color-bark)',
            marginBottom: item.price ? '14px' : '0',
          }}>
            {item.era} · {item.origin}
          </p>

          {item.price && !item.sold && (
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: 'var(--color-amber)',
              fontWeight: 400,
            }}>
              € {item.price.toLocaleString()}
            </p>
          )}
        </div>

      </article>
    </Link>
  );
}
