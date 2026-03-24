"use client";



import { useEffect, useState } from "react";
import styles from "./HiraganaCards.module.css";
import { getHiragana, Hiragana } from "@/app/services/hiragana-service";
import Link from "next/link";


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
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button style={{ margin: '18px 0 18px 0', padding: '8px 18px', borderRadius: 8, border: 'none', background: '#3b3b7a', color: '#fff', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #3b3b7a22' }}>← Voltar para Home</button>
      </Link>
      <section style={{ background: 'rgba(192,57,43,0.08)', borderRadius: 18, boxShadow: '0 2px 12px #c0392b22', padding: 24, marginBottom: 0 }}>
        <h2 style={{ color: 'var(--hiragana-color)', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Hiragana - Tabela Completa</h2>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      </section>
      {grupos.map((grupo) => (
        <section key={grupo.tipo} style={{ background: 'rgba(192,57,43,0.04)', borderRadius: 14, boxShadow: '0 2px 8px #c0392b11', padding: 18, margin: '24px 0' }}>
          <h3 style={{ color: 'var(--hiragana-color)', fontWeight: 600, fontSize: 20, marginBottom: 14 }}>{tipoLabel[grupo.tipo] || grupo.tipo}</h3>
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
    </div>
  );
}
