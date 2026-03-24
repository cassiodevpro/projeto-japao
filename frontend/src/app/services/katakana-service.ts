import { apiGet } from "./api";

export interface Katakana {
  id: number;
  caractere: string;
  romaji: string;
  grupo: string;
  tipo: string;
  examples: string[];
}

export interface KatakanaResponse {
  table: string;
  total: number;
  data: Katakana[];
}

export function getKatakana() {
  return apiGet<KatakanaResponse>("/", { action: "getAll", table: "katakana" });
}
