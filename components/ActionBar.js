import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export const ActionBar = () => (
    <div className={styles.actionBar}>
        <section>
          <Link href='/'>ALUNOS</Link>
          <Link href='/matriculas'>MATRICULAS</Link>
          <Link href='/pedidos'>PEDIDOS</Link>
          <Link href='/planos'>PLANOS</Link>
        </section>
        <div className={styles.actionBarInfo}>
          <span className={styles.userStat}>Adiministrador</span>
          <Link href={'#'}>Sair do sistema</Link>
        </div>
    </div>
);
