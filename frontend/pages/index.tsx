import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [students, setStudents] = useState(
    [
      {
        name: 'Deuzivan Lima Viana',
        email: 'deuzivan@gmail.com',
        age: 23,
        is_active: false
      },
      {
        name: 'Nandes Sousa Fernandes de Sousa',
        email: 'nandes@gmail.com',
        age: 27,
        is_active: true
      },
      {
        name: 'Friedrich Wilhelm Nietzsche',
        email: 'nietzsche@gmail.com',
        age: 179,
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
          <button onClick={() => router.push('/cadastrar_aluno')}>
            CADASTRAR
          </button>
          <input placeholder='Buscar aluno'/>
        </div>
      </nav>

      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>IDADE</th>
            <th>MARTRICULA ATIVA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => ( <tr key={student.email}>
              <td>{ student.name }</td>
              <td>{ student.email }</td>
              <td>{ student.age }</td>
              <td>
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
