export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(201,168,76,0.08)',
      borderTop: '1px solid rgba(201,168,76,0.13)',
      fontFamily: 'Crimson Pro, Georgia, serif',
      color: 'var(--muted)',
      padding: '2.2rem 0 1.2rem',
      marginTop: 32,
      textAlign: 'center',
      fontSize: '1.05rem',
      letterSpacing: '0.08em',
    }}>
      <div>
        <span style={{ color: 'var(--gold)', fontWeight: 600 }}>&copy; 2024 Projeto Japão</span> — Todos os direitos reservados.
      </div>
    </footer>
  );
}