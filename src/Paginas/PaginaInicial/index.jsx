import Banner from "../../Componentes/Banner";
import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import Rodape from "../../Componentes/Rodape";
import styles from './PaginaInicial.module.scss'
export default function PaginaInicial() {
    return(
       <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <Banner/>
                <Rodape/>
            </section>
        </main>
       </>
    );
}