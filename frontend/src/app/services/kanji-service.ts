import { apiGet } from "./api";

export interface Kanji {
  id: number;
  caractere: string;
  romaji: string;
  significado: string;
  grupo: string;
  tipo: string;
}

export interface KanjiResponse {
  table: string;
  total: number;
  data: Kanji[];
}

export function getKanji() {
  return apiGet<KanjiResponse>("/", { action: "getAll", table: "kanji" });
}
