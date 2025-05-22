import { useState } from "react"
import CursoReutilizado from "../CursoReutilizado"

export function JavaScript() {
    const [imgReact] = useState([
        {
            img: "./javaScript/javascript consumindo e tratando dados.jpg",
            id: 1
        },
        {
            img: "./javaScript/javascript manipulando o dom.jpg"
            , id: 2
        },
        {
            img: "./javaScript/javaScript para web.jpg",
            id: 3
        },
    ])
    return (
        <article >
            <CursoReutilizado
                nome="Aqui estão os curso de JavaScript:"
                imagem={imgReact}
            />
        </article>
    )
}