import Head from 'next/head'
import styled from 'styled-components'

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`

export default function Post() {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      Write something...
    </>
  )
}
