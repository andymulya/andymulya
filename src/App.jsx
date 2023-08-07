import NavBar from './components/NavBar'
import Profile from './pages/Profile'
import Footer from './components/Footer'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(){
  return (
    <div className="text-white bg-gradient-to-b from-slate-500 to-slate-900">
      <NavBar />
      <Profile />
      <Footer />
    </div>
  )
}
