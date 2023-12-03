import styles from './Home.module.css'
import porcoMoney from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1> Bem-vido ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <img src={porcoMoney} alt="porquinho de dinheiro"/>
        </section>
    )
}

export default Home