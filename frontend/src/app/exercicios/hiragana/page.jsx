import PageShell from "@/app/components/page-shell";
import shared from "@/app/components/shared.module.css";

export default function ExerciciosHiragana() {
  return (
    <PageShell>
      <section className={`${shared.sectionCard} ${shared.hiragana}`}>
        <h2 className={shared.pageHeading} style={{ color: "var(--hiragana-color)" }}>Exercícios de Hiragana</h2>
        <div className={shared.placeholderCard}>Em construção — em breve novos exercícios por aqui.</div>
      </section>
    </PageShell>
  );
}
