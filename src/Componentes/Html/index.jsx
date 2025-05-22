
import { useState } from "react";
import CursoReutilizado from "../CursoReutilizado";

export function Html() {
    const [imgReact] = useState([
        {
            img: "./html/html parte 1.png",
            id: 1
        },
        {
            img: "./html/html parte 2.png"
            , id: 2
        },
        {
            img: "./html/html parte 3.png",
            id: 3
        },
        {
            img: "./html/html parte 4.png",
            id: 4
        },
        {
            img: "./html/html estrutura.png",
            id: 5
        },
        {
            img: "./html/html ia.png",
            id: 6
        },
    ]);

    return (
        <article>
            < CursoReutilizado
                nome="Aqui estão os curso de Html"
                imagem={imgReact}

            />
        </article>
    )
}