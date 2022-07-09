import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button } from '@components/elements/Button'

export default function Home (): JSX.Element {
  const [name, setName] = useState('')

  useEffect(() => {
    setName('Rodrigo Victor')
  }, [])

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
          {' '}
          {name}
        </a>
      </h1>
      <Button />
    </>
  )
}
