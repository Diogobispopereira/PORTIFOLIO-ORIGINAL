import { useState } from "react"
import CursoReutilizado from "../CursoReutilizado"

export function GitHub() {
    const [imgReact] = useState([
        {
            img: "./github/git github.jpg",
            id: 1
        },
        {
            img: "./github/github copilot.jpg",
            id: 2
        },
        
      
    ])
    return (
        <article >
            <CursoReutilizado
                nome="Aqui estão os curso de Github"
                imagem={imgReact}
            />
        </article>
    )
}