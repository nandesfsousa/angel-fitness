import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Matriculas() {
  const router = useRouter()
  const [students, setStudents] = useState(
    [
      {
        name: 'Deuzivan Lima Viana',
        plano: 'Start',
        begin_at: '01/01/2023',
        end_at: '01/03/2024',
        is_active: true
      },
      {
        name: 'Nandes Sousa Fernandes de Sousa',
        plano: 'Start',
        begin_at: '01/01/2023',
        end_at: '01/03/2024',
        is_active: false
      },
      {
        name: 'Friedrich Wilhelm Nietzsche',
        plano: 'Start',
        begin_at: '01/01/2023',
        end_at: '01/03/2024',
        is_active: false
      }
    ]
  )

  return <Layout style={{backgroundColor: 'rgb(240, 240, 240)', height: '100vh'}}>
    <ActionBar/>
    <div className={styles.manageStudentContainer}>
      <nav>
        <h1>Gerenciamento de Alunos</h1>
        <div>
          <button onClick={() => router.push('/cadastrar')}>
            CADASTRAR
          </button>
        </div>
      </nav>

      <table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INICIO</th>
            <th>TÉRMINO</th>
            <th style={{textAlign: 'center'}}>ATIVA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => ( <tr key={student.name}>
              <td>{ student.name }</td>
              <td>{ student.plano }</td>
              <td>{ student.begin_at }</td>
              <td>{ student.end_at }</td>
              <td style={{textAlign: 'center'}}>
                {student.is_active ?
                    <i className={'bi bi-check-circle-fill'} style={{color: '#00ff6a'}}></i> :
                    <i className={'bi bi-x-circle-fill'} style={{color: '#ff0a2f'}}></i>}
              </td>
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
