import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Transactions from './pages/Transactions/Transactions'
import Accounts from './pages/Accounts/Accounts'
import Investments from './pages/Investments/Investments'
import CreditCards from './pages/Credit/CreditCards'
import Loans from './pages/Loans/Loans'
import Services from './pages/Services/Services'
import Setting from './pages/Setting/Setting'

function App() {

  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/investments' element={<Investments />} />
            <Route path='/creditCards' element={<CreditCards />} />
            <Route path='/loans' element={<Loans/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/setting' element={<Setting/>} />
          </Routes>
        </Sidebar>
      </BrowserRouter >
    </>
  )
}

export default App
