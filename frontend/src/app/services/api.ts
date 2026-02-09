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

// GET genérico
export async function apiGet<T>(
  path: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = params
    ? `${API_URL}${path}?${new URLSearchParams(params as Record<string, string>).toString()}`
    : `${API_URL}${path}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  return response.json();
}

// POST genérico
export async function apiPost<T>(
  path: string,
  body: Record<string, unknown>
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar dados para a API");
  }

  return response.json();
}
