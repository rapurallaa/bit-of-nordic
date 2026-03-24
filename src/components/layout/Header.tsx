'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--color-birch)',
      borderBottom: '1px solid var(--color-mist)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: 'var(--color-charcoal)',
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1.1,
            }}>
              Bit of Nordic
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              color: 'var(--color-bark)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              marginTop: '2px',
            }}>
              Curated Vintage from the North
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '36px' }} className="hidden sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(link.href)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: hovered === link.href ? 'var(--color-forest)' : 'var(--color-stone)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
