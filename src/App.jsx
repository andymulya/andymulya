import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Layout from './components/Layout'
import Portofolio from './pages/Portofolio'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="text-white bg-gradient-to-b from-slate-500 to-slate-900">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
