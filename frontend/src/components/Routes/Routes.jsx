import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage.jsx'
import Body from '../Homepage/Body.jsx'

class UnconnectedRoutes extends Component {
    renderHomepage = () => {
        return <Homepage />
    }

    renderPlanters = () => {
        return <div>Hello World</div>
    }
    
    render = () => {
        return (
            <div>
                <Route exact={true} path='/' render={this.renderHomePage} />
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