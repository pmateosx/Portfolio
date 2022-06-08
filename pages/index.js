import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pablo Mateos</title>
        <meta name="description" content="portfolio by Pablo Mateos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi there! I´m Pablo
        </h1>
        <h5 className={styles.subtext}>Full Stack Web Developer</h5>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
