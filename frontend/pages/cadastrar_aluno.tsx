import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { ActionBar } from '@/components/ActionBar'
import styles from '@/styles/Home.module.css'
import stylesr from '@/styles/Register.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()

  return <Layout style={{backgroundColor: 'rgb(240, 240, 240)', height: '100vh'}}>
    <ActionBar/>
    <div className={styles.manageStudentContainer}>
        <nav>
            <h1>Cadastro do Aluno</h1>
            <div>
            <button onClick={() => router.push('/')} className={styles.backButton} style={{background: 'none', color: 'black', borderWidth: 1}}>
                VOLTAR
            </button>
            <button>
                SALVAR
            </button>
            </div>
        </nav>
        <div className={stylesr.registerContainer}>
            <label>NOME</label>
            <input type='text'/>
            <label>ENDEREÇO DE E-MAIL</label>
            <input type='text'/>
            <div className={stylesr.moreInfoFromStudent}>
                <div>
                    <label>IDADE</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>PESO (EM KG)</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>ALTURA</label>
                    <input type='text'/>
                </div>
            </div>
        </div>    
    </div>
  </Layout>
}
