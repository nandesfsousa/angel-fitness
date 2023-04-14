import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from 'components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <Layout>
        <div className='login-card'>
          <label>E-MAIL</label>
          <input type='email' placeholder='exemplo@gmail.com'/>
          <label>SENHA</label>
          <input type='password' placeholder='********'/>
          <button>Entrar No Sistema</button>
        </div>
    </Layout>
  )
}
