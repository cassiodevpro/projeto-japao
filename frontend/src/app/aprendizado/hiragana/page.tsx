"use client";



import { useEffect, useState } from "react";
import styles from "./HiraganaCards.module.css";
import shared from "@/app/components/shared.module.css";
import { getHiragana, Hiragana } from "@/app/services/hiragana-service";
import Link from "next/link";
import PageShell from "@/app/components/page-shell";


export default function HiraganaCards() {
  const [hiraganaList, setHiraganaList] = useState<Hiragana[]>([]);
  const [flipped, setFlipped] = useState<Record<string, number | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHiragana()
      .then((res) => setHiraganaList(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFlip = (tipo: string, idx: number) => {
    setFlipped((prev) => ({ ...prev, [tipo]: prev[tipo] === idx ? null : idx }));
  };

  // Agrupa por tipo
  const tipos = ["gojuon", "dakuten", "handakuten", "yoon"];
  const tipoLabel: Record<string, string> = {
    gojuon: 'Gojuon (Básico)',
    dakuten: 'Dakuten (Sonorização)',
    handakuten: 'Handakuten (Semissonorização)',
    yoon: 'Yoon (Junções)'
  };
  const grupos = tipos.map(tipo => ({
    tipo,
    cards: hiraganaList.filter(h => h.tipo === tipo)
  })).filter(g => g.cards.length > 0);

  return (
    <PageShell>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button className={shared.backButton}>← Voltar para Home</button>
      </Link>
      <section className={`${shared.sectionCard} ${shared.hiragana}`}>
        <h2 className={shared.pageHeading} style={{ color: 'var(--hiragana-color)' }}>Hiragana - Tabela Completa</h2>
        {loading && <p>Carregando...</p>}
        {error && <p className={shared.errorText}>Erro: {error}</p>}
      </section>
      {grupos.map((grupo) => (
        <section key={grupo.tipo} className={`${shared.sectionCard} ${shared.hiragana}`}>
          <h3 className={shared.subHeading} style={{ color: 'var(--hiragana-color)' }}>{tipoLabel[grupo.tipo] || grupo.tipo}</h3>
          <div className={styles.cardsContainer}>
            {grupo.cards.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.card} ${flipped[grupo.tipo] === idx ? styles.flipped : ""}`}
                onClick={() => handleFlip(grupo.tipo, idx)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{item.caractere}</div>
                  </div>
                  <div className={styles.cardBack}>
                    <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{item.romaji}</div>
                    <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>
                      Tradução
                    </div>
                    <div style={{ fontSize: "1rem", color: "#666" }}>
                      Exemplo: {item.examples?.[0] || "-"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
