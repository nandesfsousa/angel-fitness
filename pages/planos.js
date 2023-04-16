import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Plans() {
  const router = useRouter()
  const [students, setStudents] = useState(
    [
        {name: 'Start',
        duration: '1 mês',
        price_per_moth: 'R$ 127,99'},
        {name: 'Gold',
        duration: '3 mês',
        price_per_moth: 'R$ 327,99'},
        {name: 'Start',
        duration: '6 mês',
        price_per_moth: 'R$ 527,99'},

    ]
  )

  return <Layout style={{backgroundColor: 'rgb(240, 240, 240)', height: '100vh'}}>
    <ActionBar/>
    <div className={styles.manageStudentContainer}>
      <nav>
        <h1>Gerenciamento de Planos</h1>
        <div>
          <button onClick={() => router.push('/cadastrar_plano')}>
            CADASTRAR
          </button>
        </div>
      </nav>

      <table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th style={{textAlign: 'center'}}>DURAÇÂO</th>
            <th>MARTRICULA ATIVA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => ( <tr key={student.name}>
              <td>{ student.name }</td>
              <td style={{textAlign: 'center'}}>{ student.duration }</td>
              <td>{ student.price_per_moth}</td>
              <td>
                <button>EDITAR</button>
                <button>APAGAR</button>
              </td>
            </tr>)
          )}
        </tbody>
      </table>
      <footer className={styles.naviagtionStudent}>
        <button>ANTERIOR</button>
        <button>PRÓXIMO</button>
      </footer>
    </div>
  </Layout>
}
