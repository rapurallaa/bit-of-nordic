import Link from 'next/link';

export const metadata = {
  title: 'About — Bit of Nordic',
  description: 'The story behind Bit of Nordic and a lifetime of collecting vintage objects from across the Nordic region.',
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>

      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-bark)',
        marginBottom: '16px',
      }}>About</p>

      <h1 style={{ marginBottom: '56px' }}>About Bit of Nordic</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

        <p style={{ fontSize: '1rem', color: 'var(--color-stone)', lineHeight: 1.85 }}>
          I have been collecting vintage Nordic objects for most of my adult life. It started with a single watch — a battered Tissot found in a market stall on a cold November morning — and grew, slowly and without any real plan, into what it is today. A collection of objects that share a quality I find difficult to describe precisely, but recognise immediately: they were made by people who cared.
        </p>

        <p style={{ fontSize: '1rem', color: 'var(--color-stone)', lineHeight: 1.85 }}>
          Nordic craftspeople have always understood that good design is not ornament. It is clarity. A watch that tells the time beautifully. A coin that carries the weight of a nation&apos;s history in silver. A glass vase whose curves hold light the way a lake holds sky. These are not decorative objects — they are functional ones that happened to be made with exceptional care, in a tradition that values simplicity and endurance above novelty.
        </p>

        <p style={{ fontSize: '1rem', color: 'var(--color-stone)', lineHeight: 1.85 }}>
          My Nordic heritage is a part of why these objects speak to me. There is something in their restraint — the absence of excess, the preference for material honesty — that feels familiar. When I hold the Iittala glass vase and an Omega watch from the 1960s, I&apos;m struck by how both embody the era&apos;s devotion to pure, purposeful form — each a masterclass in Scandinavian and Swiss precision respectively, where honest materials and clean lines were elevated into timeless objects still coveted by collectors today. Bit of Nordic is my attempt to give these pieces a longer chapter in that story.
        </p>

        <p style={{ fontSize: '1rem', color: 'var(--color-stone)', lineHeight: 1.85 }}>
          The collection spans timepieces, coins, and Scandinavian design glass — areas where the Nordic tradition has produced some of its finest work. Everything here has been personally sourced and selected. Nothing is acquired carelessly. If a piece does not earn its place, it does not appear.
        </p>

        <div style={{
          borderLeft: '2px solid var(--color-forest)',
          paddingLeft: '28px',
          margin: '12px 0',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--color-charcoal)',
            lineHeight: 1.5,
          }}>
            If you see something that speaks to you, or if you have a piece you think belongs here, I would love to hear from you.
          </p>
        </div>

        <div style={{ paddingTop: '16px' }}>
          <Link href="/contact" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-forest)',
            textDecoration: 'none',
          }}>
            Get in Touch →
          </Link>
        </div>

      </div>
    </main>
  );
}
