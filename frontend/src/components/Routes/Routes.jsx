//React imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
//Component imports
import Homepage from '../Homepage/Homepage.jsx'


class UnconnectedRoutes extends Component {
    renderRoot = () => {
        return <Homepage />
    }

    renderPlanters = () => {
        return <div>Hello World</div>
    }
    
    render = () => {
        return (
            <div>
                <Route exact={true} path='/' render={this.renderRoot} />
                <Route exact={true} path='/planters' render={this.renderPlanters} />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {}
}

let Routes = connect(mapStateToProps)(UnconnectedRoutes)

export default Routes