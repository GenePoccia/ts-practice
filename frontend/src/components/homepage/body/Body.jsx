import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class UnconnectedBody extends Component {
    render = () => {
        return <div>Body goes here</div>
    }
}


let mapStateToProps = state => {
    return {
        planters: state.planters
    }
}

let Body = connect(mapStateToProps)(UnconnectedBody)

export default Body