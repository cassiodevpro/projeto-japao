"use client";



import { useEffect, useState } from "react";
import styles from "./HiraganaCards.module.css";
import { getHiragana, Hiragana } from "@/app/services/hiragana-service";
import Link from "next/link";

export default function HiraganaCards() {
  const [hiraganaList, setHiraganaList] = useState<Hiragana[]>([]);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHiragana()
      .then((res) => setHiraganaList(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFlip = (idx: number) => {
    setFlippedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button style={{ margin: '18px 0 18px 0', padding: '8px 18px', borderRadius: 8, border: 'none', background: '#3b3b7a', color: '#fff', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #3b3b7a22' }}>← Voltar para Home</button>
      </Link>
      <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)', borderRadius: 18, boxShadow: '0 2px 12px #e0e7ff55', padding: 24, marginBottom: 36 }}>
        <h2 style={{ color: '#3b3b7a', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Hiragana - Aprendizado</h2>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>Erro: {error}</p>}
        <div className={styles.cardsContainer}>
          {hiraganaList.map((item, idx) => (
            <div
              key={item.caractere}
              className={`${styles.card} ${flippedIndex === idx ? styles.flipped : ""}`}
              onClick={() => handleFlip(idx)}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{item.caractere}</div>
                </div>
                <div className={styles.cardBack}>
                  <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{item.romaji}</div>
                  <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>
                    {/* Tradução em pt-br (mock) */}
                    {item.caractere === "あ" ? "A (exemplo: amanhecer)" : item.caractere === "い" ? "I (exemplo: cachorro)" : "Tradução"}
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
    </div>
  );
}
