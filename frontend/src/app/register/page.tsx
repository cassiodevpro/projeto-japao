"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAxiosError } from "axios";
import { useAuth } from "@/context/AuthContext";
import PageShell from "@/app/components/page-shell";
import styles from "../login/auth.module.css";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setSubmitting(true);
    try {
      await register(username, password);
      router.push("/");
    } catch (err) {
      const message = isAxiosError(err) ? err.response?.data : undefined;
      setError(message || "Não foi possível criar sua conta.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <img src="/assets/logo/logo.svg" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Criar conta</h1>
          <p className={styles.subtitle}>Cadastre-se para acompanhar seus estudos</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">Usuário</label>
              <input
                id="username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="confirmPassword">Confirmar senha</label>
              <input
                id="confirmPassword"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            {error && <p className={styles.error}>{String(error)}</p>}
            <button type="submit" disabled={submitting} className={styles.submit}>
              {submitting ? "Criando..." : "Criar conta"}
            </button>
          </form>
          <p className={styles.switch}>
            Já tem conta? <Link href="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
