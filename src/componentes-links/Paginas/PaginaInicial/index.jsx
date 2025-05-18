import styles from "./paginaInicial.module.css"
import { Home } from "../Home";
import { Projetos } from "../Projetos";
import { Contato } from "../Contato";

export function PaginaInicial() {
    return(
        <article className={styles.paginaInicial}>
            <Home/>
            <Projetos/>
            <Contato/>
        </article>
    )
}