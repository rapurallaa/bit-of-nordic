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

const categorySymbol: Record<string, string> = {
  watches: '◷',
  coins: '◎',
  glass: '◇',
  other: '·',
};

export default function ItemCard({ item }: { item: Item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/item/${item.id}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article style={{
        border: '1px solid var(--color-mist)',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Image / Placeholder */}
        <div style={{
          aspectRatio: '4/3',
          backgroundColor: 'var(--color-linen)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-mist)',
        }}>
          {item.images[0] ? (
            <Image
              src={item.images[0]}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                color: 'var(--color-mist)',
                marginBottom: '8px',
                lineHeight: 1,
              }}>
                {categorySymbol[item.category]}
              </div>
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
              }}>
                {categoryLabels[item.category]}
              </span>
            </div>
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

          {/* Featured dot */}
          {item.featured && !item.sold && (
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'var(--color-forest-light)',
              color: 'var(--color-forest)',
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '2px',
            }}>
              New
            </div>
          )}
        </div>

        {/* Details */}
        <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
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
            lineHeight: 1.25,
            flex: 1,
          }}>
            {item.name}
          </h3>

          <p style={{
            fontSize: '0.8rem',
            color: 'var(--color-bark)',
            marginBottom: '16px',
          }}>
            {item.era} · {item.origin}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {item.price && !item.sold ? (
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                color: 'var(--color-amber)',
                fontWeight: 400,
              }}>
                € {item.price.toLocaleString()}
              </p>
            ) : item.sold ? (
              <p style={{ fontSize: '0.75rem', color: 'var(--color-bark)', fontStyle: 'italic' }}>Sold</p>
            ) : null}

            <span style={{
              fontSize: '0.8rem',
              color: hovered ? 'var(--color-forest)' : 'var(--color-mist)',
              transition: 'color 0.2s ease',
            }}>→</span>
          </div>
        </div>

      </article>
    </Link>
  );
}
