
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import SideBar from './component/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import Portfolio from './pages/Portfolio'
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Toaster/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
  </Routes>
  {/* <SideBar/> */}
  </BrowserRouter>
  </>
  )
}
export default App
