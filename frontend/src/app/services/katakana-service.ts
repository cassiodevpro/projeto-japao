import { apiFetch } from "./api";

export type TipoKatakana = "basico" | "dakuten" | "handakuten";

export interface Katakana {
  id: number;
  caractere: string;
  romaji: string;
  grupo: string;
  tipo: TipoKatakana;
}

export interface KatakanaResponse {
  table: "katakana";
  total: number;
  data: Katakana[];
}

export const KatakanaService = {
  getAll() {
    return apiFetch<KatakanaResponse>({
      action: "getAll",
      table: "katakana"
    });
  },

  getByGrupo(grupo: string) {
    return apiFetch<KatakanaResponse>({
      action: "getByGrupo",
      table: "katakana",
      grupo
    });
  },

  getByTipo(tipo: TipoKatakana) {
    return apiFetch<KatakanaResponse>({
      action: "getByTipo",
      table: "katakana",
      tipo
    });
  }
};
