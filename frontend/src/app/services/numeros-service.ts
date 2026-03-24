import { apiGet } from "./api";

export interface Numero {
  id: number;
  numero: number;
  japones: string;
  hiragana: string;
  romaji: string;
  tipo: string;
}

export interface NumerosResponse {
  table: string;
  total: number;
  data: Numero[];
}

export function getNumeros() {
  return apiGet<NumerosResponse>("/", { action: "getAll", table: "numeros" });
}
