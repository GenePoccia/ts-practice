import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Link } from 'react-router-dom'

class UnconnectedHeader extends Component {
    render = () => {
        return <div>
            <div>Header here</div>
             image here -> site name -> login/signup?</div>
    }
}

let mapStateToProps = state => {
    return {}
}

let Header = connect(mapStateToProps)(UnconnectedHeader)

export default Header