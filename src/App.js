import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Search from './components/Search'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
);
}

export default App;
