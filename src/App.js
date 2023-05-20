import React from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import Tramites from './pages/Tramites'
import { Contacto } from './pages/Contacto'
import  HomeNavbar  from './components/Navbar'

export const App = () => {
    return (
        <HashRouter>
            <HomeNavbar>
            <Routes>
                <Route path='/palmas' element={<Home />}/>
                <Route path='/palmas/tramites' element={<Tramites />}/>
                <Route path='/palmas/contacto' element={<Contacto />}/>
            </Routes>
            </HomeNavbar>
        </HashRouter>
    )
}
