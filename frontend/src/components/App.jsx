import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Homepage from '../components/Homepage/Homepage.jsx'
import Routes from './Routes/Routes.jsx'



class UnconnectedApp extends Component {
    render = () => {
        return <div>
            <Homepage />
        </div>
    }
}

let mapStateToProps = state => {
    return {}
}

let App = connect(mapStateToProps)(UnconnectedApp)

export default App