import { useState } from "react"
import CursoReutilizado from "../CursoReutilizado"

export function PageIa() {
    const [imgReact] = useState([
        {
            img: "./business agility/agilidade agil.jpg",
            id: 1
        },
        {
            img: "./business agility/business agility.jpg"
            , id: 2
        },
        {
            img: "./business agility/demanda do mercado.jpg"
            , id: 3
        },
        {
            img: "./business agility/proposito profissional.jpg"
            , id: 4
        },
      
    ])
    return (
        <article >
            <CursoReutilizado
                nome="Aqui estão os curso de Buniness Agility"
                imagem={imgReact}
            />
        </article>
    )
}