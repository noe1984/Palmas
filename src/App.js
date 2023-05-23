import React from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import Tramites from './pages/Tramites'
import { Contacto } from './pages/Contacto'
import  HomeNavbar  from './components/Navbar'

const App = () => {
    return (
        <HashRouter>
            <HomeNavbar>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/tramites' element={<Tramites />}/>
                <Route path='/contacto' element={<Contacto />}/>
            </Routes>
            </HomeNavbar>
        </HashRouter>
    )
}

export {App}
