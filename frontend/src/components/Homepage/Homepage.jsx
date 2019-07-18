//React imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
//Component imports
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'


class UnconnectedHomepage extends Component {
    render = () => {
        return <div> <Header />
                <Body />        
                <Footer />
         </div>
    }
}

let mapStateToProps = state => {
    return {}
}

let Homepage = connect(mapStateToProps)(UnconnectedHomepage)

export default Homepage