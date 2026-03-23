import { apiGet } from "./api";

// Removed duplicate and incorrect getHiragana function

export interface Hiragana {
  id: number;
  caractere: string;
  romaji: string;
  examples?: string[]; // Add this line
  grupo: string;
  tipo: string;
}
export interface HiraganaResponse {
  table: string;
  total: number;
  data: Hiragana[];
}

export function getHiragana() {
  return apiGet<HiraganaResponse>("/", { action: "getAll", table: "hiragana" });
}
