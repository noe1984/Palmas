import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import Tramites from './pages/Tramites'
import Precios from './pages/Precios'

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/palmas' component={Home}/>
                {/* <Route exact path='/palmas' component={Tramites}/> */}
                {/* <Route exact path='/palmas/precios' component={Precios}/> */}
            </Switch>
        </BrowserRouter>
    )
}
