import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Layout from './components/Layout'
import Portofolio from './pages/Portofolio'

export default function App(){
  return (
    <div className="bg-gradient-to-t lg:bg-gradient-to-l from-white from-60% to-cyan-200">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="portofolio" element={<Portofolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
