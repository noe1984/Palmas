import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import Tramites from './pages/Tramites'
import Precios from './pages/Precios'
import { Navbar } from './components/Navbar'

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar>
            <Switch>
                <Route exact path='/palmas' component={Home}/>
                <Route exact path='/palmas/tramites' component={Tramites}/>
                {/* <Route exact path='/palmas/precios' component={Precios}/> */}
            </Switch>
            </Navbar>
        </BrowserRouter>
    )
}
