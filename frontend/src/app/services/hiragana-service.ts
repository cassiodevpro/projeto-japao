import { apiGet } from "./api";

export function getHiragana() {
  return apiGet("/?table=hiragana");
}
