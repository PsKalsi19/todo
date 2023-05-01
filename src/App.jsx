import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import DetailsTodo from './components/DetailsTodo'
import NotFound from './components/NotFound'
import OpenTasks from './components/OpenTasks'
import DoneTasks from './components/DoneTasks'
import NavData from './components/NavData'
function App() {

  return (
    <>
    <NavData/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<DetailsTodo/>} />
      <Route path="/completed" element={<DoneTasks/>} />
      <Route path="/open" element={<OpenTasks/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
