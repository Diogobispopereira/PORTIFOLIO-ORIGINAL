import { useState } from "react"
import style from "./react.module.css"

export function React() {
    const [imgReact] = useState([
        {
            img: "./react/gerenciando estado react.png",
            id: 1
        },
        {
            img: "./react/react estilize com styled.png"
            , id: 2
        },
        {
            img: "./react/react com js.png",
            id: 3
        },
    ])
    return (
        <article className={style.react}>
            <h2>Aqui está todos os curso de React:</h2>
            <section className={style.react__container}>
                {imgReact.map((item) => (
                    <div id={item.id}>
                        <img src={item.img} />
                    </div>
                ))}
         
            </section> 
              <p>Você pode acessar o <a href="https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end/details/certifications/"><strong>LinkidIn</strong></a></p>
        </article>
    )
}