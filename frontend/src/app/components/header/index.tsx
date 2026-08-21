"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import styles from "./header.module.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <img src="/assets/logo/logo.svg" alt="Logo" className={styles.brandLogo} />
          <span className={styles.brandLabel}>日本語</span>
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link} style={{ color: "var(--paper)" }}>Início</Link>
          <Link href="/aprendizado/hiragana" className={styles.link} style={{ color: "var(--hiragana-color)" }}>Hiragana</Link>
          <Link href="/aprendizado/katakana" className={styles.link} style={{ color: "var(--katakana-color)" }}>Katakana</Link>
          <Link href="/aprendizado/kanji" className={styles.link} style={{ color: "var(--kanji-color)" }}>Kanji</Link>
          <Link href="/aprendizado/numeros" className={styles.link} style={{ color: "var(--accent)" }}>Números</Link>
          <Link href="/exercicios/hiragana" className={styles.link} style={{ color: "var(--muted)" }}>Exercícios</Link>
        </div>

        <div className={styles.account}>
          {user ? (
            <>
              <span className={styles.userName}>Olá, {user.username}</span>
              <button className={styles.logoutButton} onClick={logout}>Sair</button>
            </>
          ) : (
            <Link href="/login" className={styles.authLink}>Entrar</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
