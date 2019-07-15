import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'

class UnconnectedRoutes extends Component {
    renderHomepage = () => {
        return <HomePage />
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