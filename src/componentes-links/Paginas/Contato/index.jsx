import styles from "./Contato.module.css"


export function Contato() {
  return (

    <article className={styles.Contato}>
      <div className={styles.Contato__container}>
      <h2>Entre em Contato</h2>

      <section >
        <figure>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              width="50"
            />
          </a>
          <figcaption>WhatsApp:</figcaption>
          <span>(75)9 82627812</span>
        </figure>


        <figure>
          <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="50" />
          </a>
          <figcaption>GitHub:</figcaption>
          <span>https://github.com/Diogobispopereira</span>
        </figure>

        <figure>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="50" />
          </a>
          <figcaption>LinkedIn:</figcaption>
          <span>https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end/</span>
        </figure>

        <figure>
          <a href="mailto:seuemail@exemplo.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="50" />
          </a>
          <figcaption>Email:</figcaption>
          <span>bispodiogo093@gmail.com</span>
        </figure>

      </section>
      </div>
    </article>

  );
}
