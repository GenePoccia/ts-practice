import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Header from './header/Header.jsx'
import Body from './body/Body.jsx'
import Footer from './footer/Footer.jsx'


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