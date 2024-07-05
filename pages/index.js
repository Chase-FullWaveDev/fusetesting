import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    <Head>
      import memberstackDOM from '@memberstack/dom';
        const memberstack = memberstackDOM.init({
          publicKey: "pk_sb_df3cce50a7e66ccd679b",
        });
  </Head>
     /* <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer /> */
    </div>
  )
}
