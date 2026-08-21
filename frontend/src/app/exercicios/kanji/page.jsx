import PageShell from "@/app/components/page-shell";
import shared from "@/app/components/shared.module.css";

export default function ExerciciosKanji() {
  return (
    <PageShell>
      <section className={`${shared.sectionCard} ${shared.kanji}`}>
        <h2 className={shared.pageHeading} style={{ color: "var(--kanji-color)" }}>Exercícios de Kanji</h2>
        <div className={shared.placeholderCard}>Em construção — em breve novos exercícios por aqui.</div>
      </section>
    </PageShell>
  );
}
