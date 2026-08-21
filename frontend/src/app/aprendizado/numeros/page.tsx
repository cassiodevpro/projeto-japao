"use client";

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";

import { getNumeros, Numero } from "@/app/services/numeros-service";
import styles from "@/app/aprendizado/hiragana/HiraganaCards.module.css";
import shared from "@/app/components/shared.module.css";
import PageShell from "@/app/components/page-shell";

function splitNumeros(data: Numero[]) {
  const ate19 = data.filter(n => n.numero <= 19);
  const de20a100 = data.filter(n => n.numero >= 20 && n.numero <= 100 && n.numero % 10 === 0);
  return { ate19, de20a100 };
}

const dias = [
  { japones: "一日", romaji: "ichinichi", pt: "1º dia do mês" },
  { japones: "二日", romaji: "futsuka", pt: "2º dia do mês" },
  { japones: "三日", romaji: "mikka", pt: "3º dia do mês" },
  { japones: "四日", romaji: "yokka", pt: "4º dia do mês" },
  { japones: "五日", romaji: "itsuka", pt: "5º dia do mês" },
  { japones: "六日", romaji: "muika", pt: "6º dia do mês" },
  { japones: "七日", romaji: "nanoka", pt: "7º dia do mês" },
  { japones: "八日", romaji: "youka", pt: "8º dia do mês" },
  { japones: "九日", romaji: "kokonoka", pt: "9º dia do mês" },
  { japones: "十日", romaji: "tooka", pt: "10º dia do mês" },
];
const meses = [
  { japones: "一月", romaji: "ichigatsu", pt: "Janeiro" },
  { japones: "二月", romaji: "nigatsu", pt: "Fevereiro" },
  { japones: "三月", romaji: "sangatsu", pt: "Março" },
  { japones: "四月", romaji: "shigatsu", pt: "Abril" },
  { japones: "五月", romaji: "gogatsu", pt: "Maio" },
  { japones: "六月", romaji: "rokugatsu", pt: "Junho" },
  { japones: "七月", romaji: "shichigatsu", pt: "Julho" },
  { japones: "八月", romaji: "hachigatsu", pt: "Agosto" },
  { japones: "九月", romaji: "kugatsu", pt: "Setembro" },
  { japones: "十月", romaji: "juugatsu", pt: "Outubro" },
  { japones: "十一月", romaji: "juuichigatsu", pt: "Novembro" },
  { japones: "十二月", romaji: "juunigatsu", pt: "Dezembro" },
];
const diasSemana = [
  { japones: "月曜日", romaji: "getsuyoubi", pt: "Segunda-feira" },
  { japones: "火曜日", romaji: "kayoubi", pt: "Terça-feira" },
  { japones: "水曜日", romaji: "suiyoubi", pt: "Quarta-feira" },
  { japones: "木曜日", romaji: "mokuyoubi", pt: "Quinta-feira" },
  { japones: "金曜日", romaji: "kinyoubi", pt: "Sexta-feira" },
  { japones: "土曜日", romaji: "doyoubi", pt: "Sábado" },
  { japones: "日曜日", romaji: "nichiyoubi", pt: "Domingo" },
];
const dinheiro = [
  { japones: "一円", romaji: "ichien", pt: "1 iene" },
  { japones: "五円", romaji: "goen", pt: "5 ienes" },
  { japones: "十円", romaji: "juuen", pt: "10 ienes" },
  { japones: "百円", romaji: "hyakuen", pt: "100 ienes" },
  { japones: "千円", romaji: "senen", pt: "1000 ienes" },
  { japones: "一万円", romaji: "ichimanen", pt: "10.000 ienes" },
];


export default function AprendizadoNumeros() {
  const [numeros, setNumeros] = useState<Numero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Record<string, number | null>>({});

  useEffect(() => {
    getNumeros()
      .then((res) => setNumeros(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFlip = (section: string, idx: number) => {
    setFlipped((prev) => ({ ...prev, [section]: prev[section] === idx ? null : idx }));
  };

  const { ate19, de20a100 } = splitNumeros(numeros);

  return (
    <PageShell>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button className={shared.backButton}>← Voltar para Home</button>
      </Link>
      <h2 className={shared.pageHeading}>Aprendizado de Números</h2>
      {loading && <p>Carregando...</p>}
      {error && <p className={shared.errorText}>Erro: {error}</p>}
      {!loading && !error && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <section className={shared.sectionCard} style={{ '--accent': '#3b3b7a' } as CSSProperties}>
              <h2 className={shared.subHeading}>Números de 1 a 19</h2>
              <div className={styles.cardsGridColumns}>
                {ate19.map((n, idx) => (
                  <div
                    key={n.numero}
                    className={`${styles.card} ${flipped['ate19'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('ate19', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{n.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{n.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>Hiragana: <span style={{ fontWeight: 600 }}>{n.hiragana || '-'}</span></div>
                        <div style={{ fontSize: "1rem", color: "#333", marginBottom: 8 }}>Número: {n.numero}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={shared.sectionCard} style={{ '--accent': '#1b5e20' } as CSSProperties}>
              <h2 className={shared.subHeading}>Números de 20 a 100 (de 10 em 10)</h2>
              <div className={styles.cardsGridColumns}>
                {de20a100.map((n, idx) => (
                  <div
                    key={n.numero}
                    className={`${styles.card} ${flipped['de20a100'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('de20a100', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{n.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{n.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>Número: {n.numero}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={shared.sectionCard} style={{ '--accent': '#b71c1c' } as CSSProperties}>
              <h2 className={shared.subHeading}>Dias do mês</h2>
              <div className={styles.cardsGridColumns}>
                {dias.map((d, idx) => (
                  <div
                    key={d.japones}
                    className={`${styles.card} ${flipped['dias'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('dias', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{d.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{d.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>{d.pt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={shared.sectionCard} style={{ '--accent': '#006064' } as CSSProperties}>
              <h2 className={shared.subHeading}>Meses do ano</h2>
              <div className={styles.cardsGridColumns}>
                {meses.map((m, idx) => (
                  <div
                    key={m.japones}
                    className={`${styles.card} ${flipped['meses'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('meses', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{m.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{m.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>{m.pt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={shared.sectionCard} style={{ '--accent': '#c9a84c' } as CSSProperties}>
              <h2 className={shared.subHeading}>Dias da semana</h2>
              <div className={styles.cardsGridColumns}>
                {diasSemana.map((d, idx) => (
                  <div
                    key={d.japones}
                    className={`${styles.card} ${flipped['diasSemana'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('diasSemana', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{d.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{d.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>{d.pt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={shared.sectionCard} style={{ '--accent': '#6a1b9a' } as CSSProperties}>
              <h2 className={shared.subHeading}>Dinheiro (Ienes)</h2>
              <div className={styles.cardsGridColumns}>
                {dinheiro.map((d, idx) => (
                  <div
                    key={d.japones}
                    className={`${styles.card} ${flipped['dinheiro'] === idx ? styles.flipped : ""}`}
                    onClick={() => handleFlip('dinheiro', idx)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>{d.japones}</div>
                      <div className={styles.cardBack}>
                        <div style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: 8 }}>{d.romaji}</div>
                        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>{d.pt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      )}
    </PageShell>
  );
}