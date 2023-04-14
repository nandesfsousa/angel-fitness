import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Requests() {
  const router = useRouter()
  const [students, setStudents] = useState(
    [
        {name: 'Pedro'}

    ]
  )

  return <Layout style={{backgroundColor: 'rgb(240, 240, 240)', height: '100vh'}}>
    <ActionBar/>
    <div className={styles.manageStudentContainer}>
      <nav>
        <h1>Pedidos de Auxílio</h1>
        <div>
            <button onClick={() => router.push('/')} className={styles.backButton} style={{background: 'none', color: 'black', borderWidth: 1}}>
                VOLTAR
            </button>
        </div>
      </nav>

      <table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => ( <tr key={student.name}>
              <td>{ student.name }</td>
              <td>
                <button>RESPONDER</button>
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
