import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '../components/Layout'
import styles from '../styles/Login.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <Layout style={{backgroundColor: '#ef4d64', height: '100vh'}}>
        <div className={styles.loginCard}>
          <label>E-MAIL</label>
          <input type='email' placeholder='exemplo@gmail.com'/>
          <label>SENHA</label>
          <input type='password' placeholder='********'/>
          <button>Entrar No Sistema</button>
        </div>
    </Layout>
  )
}