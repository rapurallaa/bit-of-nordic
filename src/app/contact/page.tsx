export const metadata = {
  title: 'Contact — Bit of Nordic',
  description: 'Get in touch about a piece in the collection or to discuss a potential acquisition.',
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 40px' }}>

      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-bark)',
        marginBottom: '16px',
      }}>Contact</p>

      <h1 style={{ marginBottom: '24px' }}>Get in Touch</h1>

      <p style={{
        color: 'var(--color-bark)',
        lineHeight: 1.8,
        marginBottom: '56px',
        fontSize: '0.95rem',
      }}>
        Whether you have a question about a specific piece, would like to enquire about a purchase, or have a vintage Nordic object you think belongs in the collection — I would be glad to hear from you.
      </p>

      {/* Simple contact form (static for now) */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-bark)',
              marginBottom: '8px',
            }}>Name</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--color-mist)',
                borderRadius: '2px',
                backgroundColor: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: 'var(--color-stone)',
                outline: 'none',
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-bark)',
              marginBottom: '8px',
            }}>Email</label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--color-mist)',
                borderRadius: '2px',
                backgroundColor: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: 'var(--color-stone)',
                outline: 'none',
              }}
            />
          </div>
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
            marginBottom: '8px',
          }}>Subject</label>
          <input
            type="text"
            placeholder="e.g. Enquiry about Omega Seamaster 300"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-mist)',
              borderRadius: '2px',
              backgroundColor: 'white',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--color-stone)',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-bark)',
            marginBottom: '8px',
          }}>Message</label>
          <textarea
            rows={6}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-mist)',
              borderRadius: '2px',
              backgroundColor: 'white',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--color-stone)',
              outline: 'none',
              resize: 'vertical',
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            style={{
              backgroundColor: 'var(--color-forest)',
              color: 'white',
              padding: '14px 40px',
              border: 'none',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </div>

      </form>
    </main>
  );
}
