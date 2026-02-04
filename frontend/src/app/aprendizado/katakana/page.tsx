"use client";

import { Katakana, KatakanaService } from "@/app/services/katakana-service";
import { useEffect, useState } from "react";

export default function KatakanaClient() {
  const [data, setData] = useState<Katakana[]>([]);

  useEffect(() => {
    KatakanaService.getAll().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <ul>
      {data.map(k => (
        <li key={k.id}>{k.caractere} - {k.romaji}</li>
      ))}
    </ul>
  );
}
