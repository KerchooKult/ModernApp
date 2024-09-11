import Head from 'next/head'
import styled from 'styled-components'

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div style={styles.pageContainer}>
        <div style={styles.loginBox}>
          <h1 style={styles.title}>Login</h1>
          <form style={styles.form}>
            <input type="text" placeholder="Username" style={styles.input} />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />
            <button type="submit" style={styles.loginButton}>
              Log In
            </button>
          </form>
          <div style={styles.footer}>
            {/* <a href="#" style={styles.link}>Forgot Password?</a> */}
            <a href="/register" style={styles.link}>
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1f1f1f', // Light gray background for the page
  },
  loginBox: {
    backgroundColor: '#333', // Dark gray background for the login box
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '320px', // Fixed width for the login box
  },
  title: {
    fontSize: '32px',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #555', // Border color
    backgroundColor: '#444', // Darker gray for the input background
    color: '#fff', // White text for the input
    fontSize: '16px',
  },
  loginButton: {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2196F3', // Blue login button
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    color: '#2196F3', // Blue links
    fontSize: '14px',
    textDecoration: 'none',
  },
}
