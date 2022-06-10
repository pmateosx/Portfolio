import Head from 'next/head'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Works from '../components/Works'
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

      <Layout>
          <Hero/>
          <Profile />
          <Works />
          <Contact />
      </Layout>
    </div>
  )
}
