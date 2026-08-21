import PageShell from "@/app/components/page-shell";
import shared from "@/app/components/shared.module.css";

export default function ExerciciosKatakana() {
  return (
    <PageShell>
      <section className={`${shared.sectionCard} ${shared.katakana}`}>
        <h2 className={shared.pageHeading} style={{ color: "var(--katakana-color)" }}>Exercícios de Katakana</h2>
        <div className={shared.placeholderCard}>Em construção — em breve novos exercícios por aqui.</div>
      </section>
    </PageShell>
  );
}
