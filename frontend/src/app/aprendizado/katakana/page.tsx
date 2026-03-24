"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/header";
import Link from "next/link";
import { getKatakana, Katakana } from "@/app/services/katakana-service";
import styles from "@/app/aprendizado/hiragana/HiraganaCards.module.css";


type KatakanaGroup = {
  tipo: string;
  cards: Katakana[];
};

function groupKatakana(data: Katakana[]): KatakanaGroup[] {
  const tipos = ["letra", "dakuten", "handakuten", "yoon"];
  return tipos.map(tipo => ({
    tipo,
    cards: data.filter(k => k.tipo === tipo)
  })).filter(g => g.cards.length > 0);
}


export default function KatakanaClient() {
  const [katakana, setKatakana] = useState<Katakana[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Record<string, number | null>>({});

  useEffect(() => {
    getKatakana()
      .then((res) => setKatakana(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFlip = (tipo: string, idx: number) => {
    setFlipped((prev) => ({ ...prev, [tipo]: prev[tipo] === idx ? null : idx }));
  };

  const groups = groupKatakana(katakana);

  const tipoLabel: Record<string, string> = {
    letra: 'Gojuon (Básico)',
    dakuten: 'Dakuten (Sonorização)',
    handakuten: 'Handakuten (Semissonorização)',
    yoon: 'Yoon (Junções)'
  };

  return (
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button style={{ margin: '18px 0 18px 0', padding: '8px 18px', borderRadius: 8, border: 'none', background: '#1b5e20', color: '#fff', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #1b5e2022' }}>← Voltar para Home</button>
      </Link>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, margin: '32px 0' }}>
        <section style={{ background: 'rgba(44,74,110,0.08)', borderRadius: 18, boxShadow: '0 2px 12px #2c4a6e22', padding: 24, marginBottom: 0 }}>
          <h2 style={{ color: 'var(--katakana-color)', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Katakana - Tabela Completa</h2>
          {loading && <p>Carregando...</p>}
          {error && <p style={{ color: "red" }}>Erro: {error}</p>}
        </section>
        {groups.map((group) => (
          <section key={group.tipo} style={{ background: 'rgba(44,74,110,0.04)', borderRadius: 14, boxShadow: '0 2px 8px #2c4a6e11', padding: 18 }}>
            <h3 style={{ color: 'var(--katakana-color)', fontWeight: 600, fontSize: 20, marginBottom: 14 }}>{tipoLabel[group.tipo] || group.tipo}</h3>
            <div className={styles.cardsContainer}>
              {group.cards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`${styles.card} ${flipped[group.tipo] === idx ? styles.flipped : ""}`}
                  onClick={() => handleFlip(group.tipo, idx)}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>{card.caractere}</div>
                    <div className={styles.cardBack}>
                      <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{card.romaji.toUpperCase()}</div>
                      <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>
                        Exemplo:
                      </div>
                      <div style={{ fontSize: "1rem", color: "#666" }}>
                        {card.examples && card.examples.length > 0 ? card.examples[0] : "-"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
