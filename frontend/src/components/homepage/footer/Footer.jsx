import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Link } from 'react-router-dom'

class UnconnectedFooter extends Component {
    render = () => {
        return <div> Footer goes here </div>
    }
}

let mapStateToProps = state => {
    return {}
}

let Footer = connect(mapStateToProps)(UnconnectedFooter)

export default Footer