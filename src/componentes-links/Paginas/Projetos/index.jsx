import { useState } from "react"
import styles from "./Projetos.module.css"

export function Projetos() {
  const [projeto] = useState([
    {
      id: 1,
      imagem: "./projetos/AluraFlix.png",
      titulo: "AluraFlix",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site de vendas você pode adcionar qualquer coisa desde frutas a carros. Neste modelo foi feito para venda de carros.",
      link: "https://alura-flix-iwxo.vercel.app/"
    },
    {
      id: 2,
      imagem: "./projetos/AluraFlix.png",
      titulo: "AluraFlix",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site de vendas você pode adcionar qualquer coisa desde frutas a carros. Neste modelo foi feito para venda de carros.",
      link: ""
    },
    {
      id: 3,
      imagem: "./projetos/AluraFlix.png",
      titulo: "AluraFlix",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site de vendas você pode adcionar qualquer coisa desde frutas a carros. Neste modelo foi feito para venda de carros.",
      link: ""
    },
    {
      id: 4,
      imagem: "./projetos/AluraFlix.png",
      titulo: "AluraFlix",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site de vendas você pode adcionar qualquer coisa desde frutas a carros. Neste modelo foi feito para venda de carros.",
      link: ""
    },
  ])
  return (
    <article className={styles.projetos}>
      <h2>Projetos Selecionado:</h2>

      <div className={styles.quadroAzul}></div>
      <section className={styles.projeto__container}>

{projeto.map((item) => (
        <a href={item.link} className={styles.projetosImagem} key={item.id}>
          <img src={item.imagem} />
          <h3> {item.titulo}</h3>

          <p>{item.paragrafo}
          </p>
        </a>
      ))}
      </section>

    </article>
  )
} 