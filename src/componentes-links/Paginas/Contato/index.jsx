import styles from "./Contato.module.css"


export function Contato() {
  return (

    <article className={styles.Contato}>
      <div className={styles.Contato__container}>
        <h2>Entre em Contato</h2>

        <section >
          <a href="https://wa.me/75982627812" target="_blank" rel="noreferrer">
            <figure>
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                width="50"
              />
              <figcaption>WhatsApp:</figcaption>
              <span>(75) 982627812</span>
            </figure>
          </a>


          <a href="https://github.com/Diogobispopereira" target="_blank" rel="noreferrer">
            <figure>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="50" />
              <figcaption>GitHub:</figcaption>
              <span>https://github.com/Diogobispopereira</span>
            </figure>
          </a>

          <a href="https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end/" target="_blank" rel="noreferrer">
            <figure>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="50" />

              <figcaption>LinkedIn:</figcaption>
              <span>https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end/</span>
            </figure>
          </a>

          
            <figure>
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="50" />
              <figcaption>Email:</figcaption>
              <span>bispodiogo093@gmail.com</span>
            </figure>
          

        </section>
      </div>
    </article>

  );
}
