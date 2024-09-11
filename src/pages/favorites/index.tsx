import Head from 'next/head'
import styled from 'styled-components'

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`
export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      Favorites
    </>
  )
}
