import Link from 'next/link';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-linen)',
      borderTop: '1px solid var(--color-mist)',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '56px 40px 40px',
      }}>

        {/* Main columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>

          {/* Left — brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.375rem',
                fontWeight: 400,
                color: 'var(--color-charcoal)',
                display: 'block',
                marginBottom: '12px',
              }}>
                Bit of Nordic
              </span>
            </Link>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-bark)',
              lineHeight: 1.7,
              maxWidth: '280px',
            }}>
              A personal collection of vintage Nordic objects — timepieces, coins, and design glass gathered over many years across Finland, Sweden and Norway.
            </p>
          </div>

          {/* Right — nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-bark)',
              marginBottom: '4px',
            }}>
              Explore
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-stone)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-mist)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--color-bark)',
            letterSpacing: '0.04em',
          }}>
            © {new Date().getFullYear()} Bit of Nordic. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--color-mist)',
            letterSpacing: '0.04em',
          }}>
            Helsinki · Stockholm · Oslo
          </p>
        </div>

      </div>
    </footer>
  );
}
