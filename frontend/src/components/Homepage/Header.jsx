//React imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Link } from 'react-router-dom'

let logo = 'https://i.imgur.com/UJiLoFU.jpg'

class UnconnectedHeader extends Component {
    render = () => {
        return <div> <img src={logo} /> <span>Welcome to Creation Beton Neotek</span></div>
    }
}

let mapStateToProps = state => {
    return {}
}

let Header = connect(mapStateToProps)(UnconnectedHeader)

export default Header