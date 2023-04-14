import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/Layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Layout>
    <div className={styles.actionBar}>
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
  </Layout>
}
