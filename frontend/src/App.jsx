import React, { lazy } from 'react'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import LoginPage from './pages/user2/LoginPage'
import Home from './pages/Home'
import RegisterPage from './pages/user2/RegisterPage'
import PostProject from './pages/PostProject'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ProService from './pages/ProService'
import ProservicesView from './pages/ProservicesView'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import ContatUs from './pages/ContatUs'



const App = () => {
  return (
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path="/view" element={<ProservicesView/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/post/projet' element={<PostProject/>}/>
          <Route path='/pro-services' element={<ProService />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContatUs/>}/>
        </Routes>

  )
}

export default App