'use client';
import Link from 'next/link';
import { useState } from 'react';

function TranslateButton() {
  const handleTranslate = () => {
    const url = `https://translate.google.com/translate?sl=en&u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleTranslate}
      title="Translate this page"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        background: 'none',
        border: '1px solid var(--color-mist)',
        borderRadius: '2px',
        cursor: 'pointer',
        padding: '5px 10px',
        color: 'var(--color-stone)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-forest)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-forest)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-stone)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-mist)';
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
      Translate
    </button>
  );
}

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

        {/* Nav + Translate */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden sm:flex">
          <nav style={{ display: 'flex', gap: '36px' }}>
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
          <TranslateButton />
        </div>

      </div>
    </header>
  );
}
