import Head from 'next/head'
import Body from 'components/landing-body'
import Navbar from 'components/landing-navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Questions App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Body/>
    </div>
  )
}
