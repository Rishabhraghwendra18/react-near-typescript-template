import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Wallet} from "./utils/near-wallet.js";
import './index.css'

const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME || undefined })

window.onload = async () => {
   await wallet.startUp()
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App wallet={wallet}/>
    </React.StrictMode>,
  )
}
