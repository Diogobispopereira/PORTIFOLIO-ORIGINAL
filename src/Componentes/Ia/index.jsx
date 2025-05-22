import { useState } from "react"
import CursoReutilizado from "../CursoReutilizado"

export function PageIa() {
    const [imgReact] = useState([
        {
            img: "./ia/ia chatgpt.jpg",
            id: 1
        },
        {
            img: "./ia/ia no front end.jpg"
            , id: 2
        },
      
    ])
    return (
        <article >
            <CursoReutilizado
                nome="Aqui estão os curso de IA"
                imagem={imgReact}
            />
        </article>
    )
}