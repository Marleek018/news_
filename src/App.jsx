import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Article from './Pages/Article/Article'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path='article' element={<Article/>}/>
    </Routes>
    </BrowserRouter>
   
      
    </>
  )
}

export default App
