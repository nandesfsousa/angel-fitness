import React from 'react';
import Head from 'next/head';

export const Layout = (props) => {
  return (
    <main className='layout' style={props.style}>
      <Head>
        <title>{ props.title }</title>
        <meta name="description" content="Sistema Gerenciamento De Alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { props.children }
    </main>
  );
}
