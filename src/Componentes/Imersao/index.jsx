
import { useState } from "react";
import CursoReutilizado from "../CursoReutilizado";

export function Imersao() {
    const [imgReact] = useState([
        {
            img: "./imersao/imersao.jpg",
            id: 1
        }
        
    ]);

    return (
        <article>
            < CursoReutilizado
                nome="Aqui está a imersão de front end que fiz."
                imagem={imgReact}

            />
        </article>
    )
}