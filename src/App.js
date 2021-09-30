import React from 'react'
import HomePage from './pages/HomePage'
import Precios from './pages/Precios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/palmas' component={HomePage}/>
                <Route exact path='/palmas/precios' component={Precios}/>
            </Switch>
        </BrowserRouter>
    )
}
