import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export const ActionBar = () => {
    return <div className={styles.actionBar}>
        <section>
        <label className={styles.actionBarTitle}>
            ALUNOS
        </label>
        <label className={styles.actionBarSubTitle}>
            PLANOS MATRÍCULAS PEDIDOS DE AUXÍLIO
        </label>
        </section>
        <label className={styles.actionBarInfo}>
        <span className={styles.userStat}>Adiministrador</span>
        <Link href={'#'}>Sair do sistema</Link>
        </label>
    </div>
}