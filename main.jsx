import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import About from './Components/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <route path="/" element={<app/>}/>
      <route path="about" element={<About/>}></route>
      </Routes>
  </BrowserRouter>,
)
