'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Item } from '@/lib/types';

const categorySymbol: Record<string, string> = {
  watches: '◷',
  coins: '◎',
  glass: '◇',
  jewellery: '◈',
  other: '·',
};

export default function ItemCard({ item }: { item: Item }) {
  const [hovered, setHovered] = useState(false);
  const photo = item.images?.[0];

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
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Photo */}
        <div style={{
          aspectRatio: '3/4',
          backgroundColor: 'var(--color-linen)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-mist)',
        }}>
          {photo ? (
            <Image
              src={photo}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
            />
          ) : (
            /* Placeholder — shown until photo is uploaded */
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}>
              <span style={{
                fontSize: '2.5rem',
                color: 'var(--color-mist)',
                lineHeight: 1,
              }}>
                {categorySymbol[item.category] ?? '·'}
              </span>
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-mist)',
              }}>
                Photo coming soon
              </span>
            </div>
          )}

          {/* Sold badge */}
          {item.sold && (
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(50,50,50,0.85)',
              color: 'white',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '2px',
              backdropFilter: 'blur(4px)',
            }}>
              Sold
            </div>
          )}

          {/* New badge */}
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
        <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'var(--color-charcoal)',
            lineHeight: 1.25,
            marginBottom: '6px',
          }}>
            {item.name}
          </h3>

          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-bark)',
            marginBottom: '14px',
            flex: 1,
          }}>
            {item.era}{item.origin ? ` · ${item.origin}` : ''}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {item.price && !item.sold ? (
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--color-amber)',
                fontWeight: 400,
              }}>
                € {item.price.toLocaleString()}
              </p>
            ) : item.sold ? (
              <p style={{ fontSize: '0.75rem', color: 'var(--color-bark)', fontStyle: 'italic' }}>Sold</p>
            ) : (
              <span />
            )}
            <span style={{
              fontSize: '0.85rem',
              color: hovered ? 'var(--color-forest)' : 'var(--color-mist)',
              transition: 'color 0.2s ease',
            }}>→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
