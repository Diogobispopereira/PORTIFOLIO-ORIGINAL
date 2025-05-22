import styles from "./rodape.module.css";

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__linha}></div>

      <img src="./Logo/logo(2).png" alt="logo da pagina"/>
      <p>Desenvolvedor Front-End js</p>

      <div className={styles.rodape__linha}></div>
    </footer>
  );
}
