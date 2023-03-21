import React from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import Link from 'next/link'
import { Navbar } from '@components/Navbar'
import { FC } from "react" 

export const MainLayout:FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Cesar</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
