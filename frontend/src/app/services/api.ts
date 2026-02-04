const API_URL = process.env.NEXT_PUBLIC_JAPANESE_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_JAPANESE_API_URL não definida");
}

export async function apiFetch<T>(
  params: Record<string, string | number>
): Promise<T> {
  const query = new URLSearchParams(
    params as Record<string, string>
  ).toString();

  const response = await fetch(`${API_URL}?${query}`, {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  return response.json();
}
