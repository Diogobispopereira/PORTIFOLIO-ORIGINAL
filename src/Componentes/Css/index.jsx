
import { useState } from "react";
import CursoReutilizado from "../CursoReutilizado";

export function Css() {
    const [imgReact] = useState([
        {
            img: "./css/css layout responsivo.jpg",
            id: 1
        },
        {
            img: "./css/css posicionando o flexbox.jpg",
             id: 2
        },
        {
            img: "./css/css responsividade.jpg",
            id: 3
        },
        {
            img: "./css/styled component.jpg",
            id: 4
        },
    ]);

    return (
        <article>
            < CursoReutilizado
                nome="Aqui estão os curso de css"
                imagem={imgReact}

            />
        </article>
    )
}