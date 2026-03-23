"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/header";
import Link from "next/link";
import { getKanji, Kanji } from "@/app/services/kanji-service";
import styles from "@/app/aprendizado/hiragana/HiraganaCards.module.css";

interface CardGroup {
  grupo: string;
  cards: { front: string; back: string; significado: string }[];
}

function buildGroupsFromAPI(data: Kanji[]): CardGroup[] {
  const groupMap = new Map<string, Kanji[]>();
  for (const k of data) {
    const g = k.grupo || "outros";
    if (!groupMap.has(g)) groupMap.set(g, []);
    groupMap.get(g)!.push(k);
  }

  return Array.from(groupMap.entries()).map(([grupo, items]) => ({
    grupo,
    cards: items
      .sort((a, b) => a.id - b.id)
      .map((k) => ({
        front: k.caractere,
        back: k.romaji?.toUpperCase() || "",
        significado: k.significado || "",
      })),
  }));
}

export default function AprendizadoKanji() {
  const [kanjiGroups, setKanjiGroups] = useState<CardGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<boolean[][]>([]);

  useEffect(() => {
    getKanji()
      .then((res) => {
        const groups = buildGroupsFromAPI(res.data);
        setKanjiGroups(groups);
        setFlipped(groups.map((g) => g.cards.map(() => false)));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFlip = (groupIdx: number, cardIdx: number) => {
    setFlipped((prev) =>
      prev.map((group, gIdx) =>
        gIdx === groupIdx
          ? group.map((_, cIdx) => cIdx === cardIdx ? !group[cardIdx] : false)
          : group.map(() => false)
      )
    );
  };

  return (
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button style={{ margin: '18px 0 18px 0', padding: '8px 18px', borderRadius: 8, border: 'none', background: '#b71c1c', color: '#fff', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #b71c1c22' }}>← Voltar para Home</button>
      </Link>
      <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #ffe0e0 100%)', borderRadius: 18, boxShadow: '0 2px 12px #ffe0e055', padding: 24, marginBottom: 36 }}>
        <Header />
        <h2 style={{ color: '#b71c1c', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Kanji - Aprendizado</h2>
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>Erro: {error}</p>}
        {kanjiGroups.map((group, groupIdx) => (
          <div key={group.grupo}>
            <h4 style={{ marginTop: 24 }}>{group.grupo.toUpperCase()}</h4>
            <div className={styles.cardsContainer}>
              {group.cards.map((card, cardIdx) => (
                <div
                  key={cardIdx}
                  className={`${styles.card} ${flipped[groupIdx]?.[cardIdx] ? styles.flipped : ""}`}
                  onClick={() => handleFlip(groupIdx, cardIdx)}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>{card.front}</div>
                    <div className={styles.cardBack}>
                      <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{card.back}</div>
                      <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>
                        {/* Tradução pt-br mock */}
                        {card.front === "一" ? "Um (pt-br), いち (hiragana), ichi (romaji)" :
                         card.front === "二" ? "Dois (pt-br), に (hiragana), ni (romaji)" :
                         card.front === "十" ? "Dez (pt-br), じゅう (hiragana), juu (romaji)" :
                         card.significado}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}