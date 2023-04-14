import React from 'react'

export const Layout = (props: {children: React.ReactNode}) => {
    return <main className='layout'>
        { props.children }
    </main>
}