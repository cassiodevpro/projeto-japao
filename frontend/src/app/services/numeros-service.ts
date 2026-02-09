import { apiGet } from "./api";

export function getNumeros() {
  return apiGet("/", { table: "numeros" });
}
