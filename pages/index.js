import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { modalBaseStyle } from '@/components/Consts'

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
  const [isOpen, setIsOpen] = useState(false);
  const [user_selected_id, setUserSelectedID] = useState(0);

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
          {students.map((student, index) => ( <tr key={student.email}>
              <td>{ student.name }</td>
              <td>{ student.email }</td>
              <td>{ student.age }</td>
              <td>
                {student.is_active ?
                    <i className={'bi bi-check-circle-fill'} style={{color: '#00ff6a'}}></i> :
                    <i className={'bi bi-x-circle-fill'} style={{color: '#ff0a2f'}}></i>}
              </td>
              <td>
                <button onClick={() => {setIsOpen(true); setUserSelectedID(index) }}>EDITAR</button>
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
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalBaseStyle}>
      <div className={styles.modal}>
        <h1>Editar Aluno: {students.at(user_selected_id).name}</h1>
        <button onClick={() => setIsOpen(false)}>SALVAR</button>
      </div>
    </Modal>
  </Layout>
}
