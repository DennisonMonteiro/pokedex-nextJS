import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainHeader from '../layout/NavBar/Header'
import Content from '../layout/Content/Content'

const App = props => {
    return (
        <div className="App">
            <Router>
                <MainHeader />
                <Content />
            </Router>
        </div>
    )
}

export default App