import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import Tramites from './pages/Tramites'
import { Contacto } from './pages/Contacto'
import  HomeNavbar  from './components/Navbar'

export const App = () => {
    return (
        <BrowserRouter>
            <HomeNavbar>
            <Switch>
                <Route exact path='/palmas' component={Home}/>
                <Route exact path='/palmas/tramites' component={Tramites}/>
                <Route exact path='/palmas/contacto' component={Contacto}/>
            </Switch>
            </HomeNavbar>
        </BrowserRouter>
    )
}
