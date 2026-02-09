"use client";

import React, { useState } from "react";
import styles from "./HiraganaCards.module.css";

// Exemplo de palavras para cada hiragana (adicione mais conforme necessário)
const hiraganaExamples: Record<string, string[]> = {
  あ: ["あめ (chuva)", "あさ (manhã)", "あい (amor)"],
  い: ["いぬ (cachorro)", "いえ (casa)", "いし (pedra)"],
  う: ["うみ (mar)", "うた (canção)", "うし (vaca)"],
  え: ["えき (estação)", "えんぴつ (lápis)", "えがお (sorriso)"],
  お: ["おかね (dinheiro)", "おちゃ (chá)", "おとこ (homem)"],
  か: ["かさ (guarda-chuva)", "かみ (papel)", "かお (rosto)"],
  き: ["き (árvore)", "きた (norte)", "きゅう (nove)"],
  く: ["くるま (carro)", "くち (boca)", "くも (nuvem)"],
  け: ["けむり (fumaça)", "けしごむ (borracha)", "けいさつ (polícia)"],
  こ: ["こども (criança)", "ことり (passarinho)", "こい (carpa)"],
  さ: ["さかな (peixe)", "さけ (salmão)", "さくら (cerejeira)"],
  し: ["しろ (branco)", "しま (ilha)", "しんぶん (jornal)"],
  す: ["すいか (melancia)", "すし (sushi)", "すな (areia)"],
  せ: ["せみ (cigarra)", "せんせい (professor)", "せかい (mundo)"],
  そ: ["そら (céu)", "そと (fora)", "そば (soba)"],
  た: ["たまご (ovo)", "たけ (bambu)", "たに (vale)"],
  ち: ["ちず (mapa)", "ちかてつ (metrô)", "ちち (pai)"],
  つ: ["つき (lua)", "つくえ (mesa)", "つなみ (tsunami)"],
  て: ["て (mão)", "てがみ (carta)", "てんき (tempo/clima)"],
  と: ["とり (pássaro)", "ともだち (amigo)", "とけい (relógio)"],
  な: ["なつ (verão)", "なみ (onda)", "なか (dentro)"],
  に: ["にほん (Japão)", "にく (carne)", "にし (oeste)"],
  ぬ: ["ぬの (tecido)", "ぬま (pântano)", "ぬりえ (livro de colorir)"],
  ね: ["ねこ (gato)", "ねだん (preço)", "ねつ (febre)"],
  の: ["のり (alga)", "のうえん (fazenda)", "のど (garganta)"],
  は: ["はな (flor)", "はし (hashi)", "はこ (caixa)"],
  ひ: ["ひこうき (avião)", "ひと (pessoa)", "ひる (meio-dia)"],
  ふ: ["ふね (barco)", "ふゆ (inverno)", "ふく (roupa)"],
  へ: ["へや (quarto)", "へび (cobra)", "へん (estranho)"],
  ほ: ["ほし (estrela)", "ほね (osso)", "ほうせき (joia)"],
  ま: ["まど (janela)", "まち (cidade)", "まめ (feijão)"],
  み: ["みず (água)", "みみ (orelha)", "みせ (loja)"],
  む: ["むし (inseto)", "むね (peito)", "むら (vila)"],
  め: ["め (olho)", "めがね (óculos)", "めだか (peixinho)"],
  も: ["もり (floresta)", "もも (pêssego)", "もん (portão)"],
  や: ["やま (montanha)", "やさい (verdura)", "やね (telhado)"],
  ゆ: ["ゆき (neve)", "ゆめ (sonho)", "ゆび (dedo)"],
  よ: ["よる (noite)", "よこ (lado)", "ようふく (roupa ocidental)"],
  ら: ["らいおん (leão)", "らっぱ (trompete)", "らん (orquídea)"],
  り: ["りんご (maçã)", "りす (esquilo)", "りゆう (razão)"],
  る: ["るす (ausência)", "るいじ (semelhança)", "るり (lápis-lazúli)"],
  れ: ["れいぞうこ (geladeira)", "れきし (história)", "れんげ (colher de sopa)"],
  ろ: ["ろうそく (vela)", "ろく (seis)", "ろば (burro)"],
  わ: ["わに (jacaré)", "わたし (eu)", "わかめ (alga)"],
  を: ["を (partícula)", "をとこ (homem, arcaico)", "をんな (mulher, arcaico)"],
  ん: ["ほん (livro)", "おんがく (música)", "さん (três)"],
  // Adicione exemplos para dakuten e handakuten se desejar
};

const padCards = (cards: { front: string; back: string }[]) => {
  const filled = [...cards];
  while (filled.length < 5) filled.push({ front: "", back: "" });
  return filled;
};

const hiraganaGroups = [
  {
    grupo: "a",
    cards: padCards([
      { front: "あ", back: "A" },
      { front: "い", back: "I" },
      { front: "う", back: "U" },
      { front: "え", back: "E" },
      { front: "お", back: "O" },
    ]),
  },
  {
    grupo: "ka",
    cards: padCards([
      { front: "か", back: "KA" },
      { front: "き", back: "KI" },
      { front: "く", back: "KU" },
      { front: "け", back: "KE" },
      { front: "こ", back: "KO" },
    ]),
  },
  {
    grupo: "sa",
    cards: padCards([
      { front: "さ", back: "SA" },
      { front: "し", back: "SHI" },
      { front: "す", back: "SU" },
      { front: "せ", back: "SE" },
      { front: "そ", back: "SO" },
    ]),
  },
  {
    grupo: "ta",
    cards: padCards([
      { front: "た", back: "TA" },
      { front: "ち", back: "CHI" },
      { front: "つ", back: "TSU" },
      { front: "て", back: "TE" },
      { front: "と", back: "TO" },
    ]),
  },
  {
    grupo: "na",
    cards: padCards([
      { front: "な", back: "NA" },
      { front: "に", back: "NI" },
      { front: "ぬ", back: "NU" },
      { front: "ね", back: "NE" },
      { front: "の", back: "NO" },
    ]),
  },
  {
    grupo: "ha",
    cards: padCards([
      { front: "は", back: "HA" },
      { front: "ひ", back: "HI" },
      { front: "ふ", back: "FU" },
      { front: "へ", back: "HE" },
      { front: "ほ", back: "HO" },
    ]),
  },
  {
    grupo: "ma",
    cards: padCards([
      { front: "ま", back: "MA" },
      { front: "み", back: "MI" },
      { front: "む", back: "MU" },
      { front: "め", back: "ME" },
      { front: "も", back: "MO" },
    ]),
  },
  {
    grupo: "ya",
    cards: padCards([
      { front: "や", back: "YA" },
      { front: "", back: "" },
      { front: "ゆ", back: "YU" },
      { front: "", back: "" },
      { front: "よ", back: "YO" },
    ]),
  },
  {
    grupo: "ra",
    cards: padCards([
      { front: "ら", back: "RA" },
      { front: "り", back: "RI" },
      { front: "る", back: "RU" },
      { front: "れ", back: "RE" },
      { front: "ろ", back: "RO" },
    ]),
  },
  {
    grupo: "wa",
    cards: padCards([
      { front: "わ", back: "WA" },
      { front: "", back: "" },
      { front: "", back: "" },
      { front: "", back: "" },
      { front: "を", back: "WO" },
    ]),
  },
  {
    grupo: "n",
    cards: padCards([
      { front: "ん", back: "N" },
    ]),
  },
  {
    grupo: "dakuten",
    cards: padCards([
      { front: "が", back: "GA" },
      { front: "ぎ", back: "GI" },
      { front: "ぐ", back: "GU" },
      { front: "げ", back: "GE" },
      { front: "ご", back: "GO" },
    ]),
  },
  {
    grupo: "dakuten2",
    cards: padCards([
      { front: "ざ", back: "ZA" },
      { front: "じ", back: "JI" },
      { front: "ず", back: "ZU" },
      { front: "ぜ", back: "ZE" },
      { front: "ぞ", back: "ZO" },
    ]),
  },
  {
    grupo: "dakuten3",
    cards: padCards([
      { front: "だ", back: "DA" },
      { front: "ぢ", back: "JI" },
      { front: "づ", back: "ZU" },
      { front: "で", back: "DE" },
      { front: "ど", back: "DO" },
    ]),
  },
  {
    grupo: "handakuten",
    cards: padCards([
      { front: "ば", back: "BA" },
      { front: "び", back: "BI" },
      { front: "ぶ", back: "BU" },
      { front: "べ", back: "BE" },
      { front: "ぼ", back: "BO" },
    ]),
  },
  {
    grupo: "handakuten2",
    cards: padCards([
      { front: "ぱ", back: "PA" },
      { front: "ぴ", back: "PI" },
      { front: "ぷ", back: "PU" },
      { front: "ぺ", back: "PE" },
      { front: "ぽ", back: "PO" },
    ]),
  },
];

export default function AprendizadoHiragana() {
  const [flipped, setFlipped] = useState(
    hiraganaGroups.map((group) => group.cards.map(() => false))
  );

  const handleFlip = (groupIdx: number, cardIdx: number) => {
    setFlipped((prev) =>
      prev.map((group, gIdx) =>
        gIdx === groupIdx
          ? group.map((f, cIdx) => (cIdx === cardIdx ? !f : f))
          : group
      )
    );
  };

  return (
    <div>
      <h3>Página de Aprendizado de Hiragana</h3>
      {hiraganaGroups.map((group, groupIdx) => (
        <div key={group.grupo}>
          <h4 style={{ marginTop: 24 }}>{group.grupo.toUpperCase()}</h4>
          <div className={styles.cardsContainer}>
            {group.cards.map((card, cardIdx) =>
              card.front ? (
                <div
                  key={cardIdx}
                  className={`${styles.card} ${styles[group.grupo]} ${
                    flipped[groupIdx][cardIdx] ? styles.flipped : ""
                  }`}
                  onClick={() => handleFlip(groupIdx, cardIdx)}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>{card.front}</div>
                    <div className={styles.cardBack}>
                      <div style={{ fontSize: "2rem", marginBottom: 8 }}>{card.front}</div>
                      <div style={{ fontWeight: "bold", marginBottom: 8 }}>{card.back}</div>
                      <ul style={{ padding: 0, margin: 0, listStyle: "none", fontSize: "1rem" }}>
                        {(hiraganaExamples[card.front] || []).map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={cardIdx}
                  className={styles.card}
                  style={{ visibility: "hidden" }}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}