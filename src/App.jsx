import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

export default function App() {
const [token, setToken] = useState("")

  return (
    <>
      <SignUpForm setToken={setToken} token={token}/>
      <Authenticate token={token} setToken={setToken}/>

    </>
  )
}


