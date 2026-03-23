import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homeBg}>
      {/* Noise overlay */}
      <div className={styles.noiseOverlay} aria-hidden="true" />
      <div className={styles.verticalDeco}>日本語学習ガイド</div>
      <header className={styles.header}>
        <div className={styles.headerJp}>日本語</div>
        <div className={styles.headerSub}>Guia de Estudo — Japonês</div>
        <div className={styles.headerLine}></div>
      </header>
      <nav className={styles.tabs}>
        <Link href="/aprendizado/hiragana" className={styles.tabBtn + ' ' + styles.tabActive}>
          <span className={styles.jpLabel}>ひらがな</span>
          <span className={styles.ptLabel}>Hiragana</span>
        </Link>
        <Link href="/aprendizado/katakana" className={styles.tabBtn}>
          <span className={styles.jpLabel}>カタカナ</span>
          <span className={styles.ptLabel}>Katakana</span>
        </Link>
        <Link href="/aprendizado/kanji" className={styles.tabBtn}>
          <span className={styles.jpLabel}>漢字</span>
          <span className={styles.ptLabel}>Kanji</span>
        </Link>
        <Link href="/aprendizado/numeros" className={styles.tabBtn}>
          <span className={styles.jpLabel}>数字</span>
          <span className={styles.ptLabel}>Números</span>
        </Link>
      </nav>
      {/* Conteúdo central */}
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        <div style={{
          background: "rgba(245,237,224,0.05)",
          border: "1px solid rgba(245,237,224,0.1)",
          borderRadius: 12,
          padding: "2.5rem 2rem 2rem",
          textAlign: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          marginTop: "2.5rem"
        }}>
          <img src="/assets/logo/logo.svg" alt="Raposa" style={{ width: 56, height: 56, margin: "0 auto 1.2rem" }} />
          <h2 style={{ fontFamily: 'Noto Serif JP, serif', fontWeight: 400, fontSize: '2.1rem', color: 'var(--gold)', marginBottom: 8 }}>Bem-vindo!</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: 18 }}>
            Explore o guia visual para aprender Hiragana, Katakana, Kanji e Números japoneses.<br />
            Clique em cada aba acima para começar!
          </p>
          <div style={{ margin: '2.5rem 0 0.5rem' }}>
            <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.2rem' }}>日本語</span>
            <span style={{ color: 'var(--muted)', marginLeft: 8, fontSize: '1.1rem' }}>nihongo</span>
          </div>
        </div>
      </main>
    </div>
  );
}
