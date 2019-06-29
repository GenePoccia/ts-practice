import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class UnconnectedApp extends Component {
    render = () => {
        return <div>Welcome</div>
    }
}

let mapStateToProps = state => {
    return {}
}

let App = connect(mapStateToProps)(UnconnectedApp)

export default App