import { useState } from "react"
import CursoReutilizado from "../CursoReutilizado"

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
        <article >
            <CursoReutilizado
                nome="Aqui está todos os curso de React:"
                imagem={imgReact}
            />
        </article>
    )
}