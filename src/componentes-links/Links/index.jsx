import { Outlet, Link } from "react-router-dom";
import styles from "./links.module.css";

export function PaginaLink() {
    return (
               <section className={styles.links}>
            <nav >
              <h2>Diogo Bispo</h2>
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
