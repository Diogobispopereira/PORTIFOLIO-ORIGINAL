import styles from "./rodape.module.css";

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__linha}></div>

      <h2>Diogo bispo</h2>
      <p>Desenvolvedor Front-End js</p>

      <div className={styles.rodape__linha}></div>
    </footer>
  );
}
