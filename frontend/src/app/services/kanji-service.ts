import { apiGet } from "./api";

export function getKanji() {
  return apiGet("/?table=kanji");
}
