"use client";

import { useState, useEffect } from "react";
function Modal({ open, onClose, title, children }: { open: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, minWidth: 320, maxWidth: 700, width: '90vw', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button onClick={onClose} style={{ fontSize: 22, background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}
import Header from "@/app/components/header";
import Link from "next/link";

import { getNumeros, Numero } from "@/app/services/numeros-service";
import styles from "@/app/aprendizado/hiragana/HiraganaCards.module.css";

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
  const [modal, setModal] = useState<string | null>(null);

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
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <button style={{ margin: '18px 0 18px 0', padding: '8px 18px', borderRadius: 8, border: 'none', background: '#006064', color: '#fff', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #00606422' }}>← Voltar para Home</button>
      </Link>
      <Header />
      <h3>Página de Aprendizado de Números</h3>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {!loading && !error && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36, margin: '32px 0' }}>
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)', borderRadius: 18, boxShadow: '0 2px 12px #e0e7ff55', padding: 24 }}>
              <h2 style={{ color: '#3b3b7a', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Números de 1 a 19</h2>
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
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #c7f9cc 100%)', borderRadius: 18, boxShadow: '0 2px 12px #c7f9cc55', padding: 24 }}>
              <h2 style={{ color: '#1b5e20', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Números de 20 a 100 (de 10 em 10)</h2>
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
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #ffe0e0 100%)', borderRadius: 18, boxShadow: '0 2px 12px #ffe0e055', padding: 24 }}>
              <h2 style={{ color: '#b71c1c', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Dias do mês</h2>
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
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e0f7fa 100%)', borderRadius: 18, boxShadow: '0 2px 12px #e0f7fa55', padding: 24 }}>
              <h2 style={{ color: '#006064', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Meses do ano</h2>
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
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #fffde7 100%)', borderRadius: 18, boxShadow: '0 2px 12px #fffde755', padding: 24 }}>
              <h2 style={{ color: '#fbc02d', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Dias da semana</h2>
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
            <section style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e1bee7 100%)', borderRadius: 18, boxShadow: '0 2px 12px #e1bee755', padding: 24 }}>
              <h2 style={{ color: '#6a1b9a', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Dinheiro (Ienes)</h2>
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
    </div>
  );
}