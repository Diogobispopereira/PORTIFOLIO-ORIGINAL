import { useState } from "react"
import "./Home.css"




export function Home() {

    const [home] = useState([
        {
            id: 1,
            linguagem: "HTML",
            link: "/html"
        },
        {
            id: 2,
            linguagem: "CSS",
            link: "/Css"
        },
        {
            id: 3,
            linguagem: "JAVASCRIPT",
            link: "/JavaScript"
        },
        {
            id: 4,
            linguagem: "MOBILE",
            link: "/html"
        },
        {
            id: 5,
            linguagem: "REACT",
            link: "/react"
        },
        {
            id: 6,
            linguagem: "Imerão",
            link: "/imersao"
        },
    ])
    return (

        <article className="home">
            <img src="./home/diogo.jpg" alt="Foto de Diogo Bispo" className="home__image" />

            <section className="home__container">
                <h2 className="home__titulo">Minha Biografia</h2>
                <div className="linha"></div>

                       <p className="home__text">
                        Olá, meu nome é Diogo Bispo e sou desenvolvedor Front-End júnior. Estudei Programação e Front-End na <strong>Alura</strong>. Sou apaixonado por tecnologia e programação. Aprender faz parte do meu dia a dia, e os desafios me motivam a encontrar as melhores soluções.
                    </p>

                    <p className="home__text">
                        Atualmente, busco uma oportunidade para atuar como desenvolvedor Front-End, onde eu possa aplicar meus conhecimentos técnicos, crescer profissionalmente e colaborar com o crescimento da empresa e dos colegas de equipe.
                    </p>

                    <p className="home__text">
                        Gosto muito de trabalhar em equipe, pois acredito que a troca de ideias é essencial para o aprendizado e para o desenvolvimento de projetos de qualidade.
                    </p>  
               
                   
                
                    <h3 className="home__subtitulo">Habilidades e certificados:</h3>

                <div className="itensLinguagem">
               
                    {home.map((item) => (
                        <div className="home__skills" id={item.id}>

                            <a href={item.link}><button className="home__button">{item.linguagem}</button></a>
                        </div>
                    ))}
                    </div>
 
            </section>
        </article>


    )
} 
