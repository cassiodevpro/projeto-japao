"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getKatakana, Katakana } from "@/app/services/katakana-service";
import styles from "@/app/aprendizado/hiragana/HiraganaCards.module.css";
import shared from "@/app/components/shared.module.css";
import PageShell from "@/app/components/page-shell";


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
    <PageShell>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button className={shared.backButton}>← Voltar para Home</button>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <section className={`${shared.sectionCard} ${shared.katakana}`}>
          <h2 className={shared.pageHeading} style={{ color: 'var(--katakana-color)' }}>Katakana - Tabela Completa</h2>
          {loading && <p>Carregando...</p>}
          {error && <p className={shared.errorText}>Erro: {error}</p>}
        </section>
        {groups.map((group) => (
          <section key={group.tipo} className={`${shared.sectionCard} ${shared.katakana}`}>
            <h3 className={shared.subHeading} style={{ color: 'var(--katakana-color)' }}>{tipoLabel[group.tipo] || group.tipo}</h3>
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
                        Hiragana: <span style={{ fontWeight: 600 }}>{card.hiragana || '-'}</span>
                      </div>
                      <div style={{ fontSize: "1rem", color: "#666" }}>
                        Exemplo: {card.examples && card.examples.length > 0 ? card.examples[0] : "-"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
