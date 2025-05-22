import { Outlet, Link } from "react-router-dom";
import styles from "./links.module.css";

export function PaginaLink() {
    return (
               <section className={styles.links}>
            <nav >
              <img src="./logo/logo(2).png" alt="Logo da pagina"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contatos">Contatos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </section>
    );
};
