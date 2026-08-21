import { ReactNode } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer/page";
import styles from "./page-shell.module.css";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
