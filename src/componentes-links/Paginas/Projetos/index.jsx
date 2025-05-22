import { useState } from "react"
import styles from "./Projetos.module.css"

export function Projetos() {
  const [projeto] = useState([
    {
      id: 1,
      imagem: "./projetos/AluraFlix.png",
      titulo: "AluraFlix",
      paragrafo: "Este foi desenvolvido em @vite/React. Foi utilizad:Html, Css e JavaScript,neste site você pode adcionar qualquer video, tipo: Música,linguagem de programação etc.",
      link: "https://alura-flix-iwxo.vercel.app/"
    },
    {
      id: 2,
      imagem: "./projetos/AluraGeek.png",
      titulo: "AluraGeek",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site de vendas você pode adcionar qualquer coisa desde frutas a carros. Neste modelo foi feito para venda de carros.",
      link: ""
    },
    
    {
      id: 4,
      imagem: "./projetos/decodificador.png",
      titulo: "Decodificador de texto",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site você pode escrever um texto e apertar em decodificar que terá o texto modificado, se reverter o processo ele voltará ao normal .",
      link: "https://diogobispopereira.github.io/chellenge/"
    },
    {
      id: 5,
      imagem: "./projetos/jogo do numero secreto.png",
      titulo: "Jogo do numero secreto",
      paragrafo: "Este foi desenvolvido 100% em vanila a linguagem principal foi javaScript,neste site você vai se divertir ao tentar acertar o número secreto.",
      link: "https://diogobispopereira.github.io/chellenge/"
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
      <div className={styles.quadroAtencao}>
        <p>
          <strong>Obs:</strong> Os sites que foram criados com React não estão mostrando a API funcionando.
           O motivo é que cursei Front-End e, por isso, utilizei uma API fake, apenas para visualizar como o projeto ficaria. 
          Caso queira ver como ficou, é só entrar em contato comigo pelas redes sociais abaixo. 
          </p>
      </div>
    </article>
  )
} 