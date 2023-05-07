import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Animation from '../components/Animation'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Dark-Mode-Scrolling-Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Animation />
    </div>
  )
}

export default Home