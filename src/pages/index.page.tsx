import Head from 'next/head'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>
        Hello! Template made by
        <a
          target="_blank"
          href="https://github.com/RodrigoRVSN"
          rel="noreferrer"
        >
          Rodrigo Victor
        </a>
      </h1>
      <button>oi</button>
    </>
  )
}
