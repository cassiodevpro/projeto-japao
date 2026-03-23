"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header style={{
      background: 'rgba(245,237,224,0.04)',
      borderBottom: '1px solid rgba(201,168,76,0.13)',
      fontFamily: 'Noto Serif JP, serif',
      padding: '0',
      position: 'relative',
      zIndex: 20
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1300,
        margin: '0 auto',
        padding: '0.7rem 2.2rem 0.7rem 1.2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <Link href="/">
            <img src="/assets/logo/logo.svg" alt="Logo" style={{ width: 44, height: 44, marginRight: 12 }} />
          </Link>
          <span style={{ fontWeight: 700, color: 'var(--gold)', fontSize: '1.25rem', letterSpacing: '0.12em' }}>日本語</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link href="/" style={{
            color: 'var(--paper)',
            fontWeight: 500,
            fontSize: '1.05rem',
            padding: '0.5rem 1.2rem',
            borderRadius: 4,
            transition: 'background .2s',
            letterSpacing: '0.08em',
            marginRight: 2
          }}>Início</Link>
          <Link href="/aprendizado/hiragana" style={{ color: 'var(--hiragana-color)', fontWeight: 600, fontSize: '1.05rem', padding: '0.5rem 1.2rem', borderRadius: 4, transition: 'background .2s', letterSpacing: '0.08em' }}>Hiragana</Link>
          <Link href="/aprendizado/katakana" style={{ color: 'var(--katakana-color)', fontWeight: 600, fontSize: '1.05rem', padding: '0.5rem 1.2rem', borderRadius: 4, transition: 'background .2s', letterSpacing: '0.08em' }}>Katakana</Link>
          <Link href="/aprendizado/kanji" style={{ color: 'var(--kanji-color)', fontWeight: 600, fontSize: '1.05rem', padding: '0.5rem 1.2rem', borderRadius: 4, transition: 'background .2s', letterSpacing: '0.08em' }}>Kanji</Link>
          <Link href="/aprendizado/numeros" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.05rem', padding: '0.5rem 1.2rem', borderRadius: 4, transition: 'background .2s', letterSpacing: '0.08em' }}>Números</Link>
          <Link href="/exercicios/hiragana" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '1.05rem', padding: '0.5rem 1.2rem', borderRadius: 4, transition: 'background .2s', letterSpacing: '0.08em' }}>Exercícios</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#" style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.08em' }}>Entrar</a>
        </div>
      </nav>
    </header>
  );
}
