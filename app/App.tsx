import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

interface State {
    planters: Array<object>;
}

class UnconnectedApp extends Component {
    constructor(props : object) {
        super(props)
    }

    render = () => {
        return <div>Hello World!</div>
    }
}

let mapStateToProps = (state: State) => {
    return {planters: state.planters}
}

let App = connect(mapStateToProps)(UnconnectedApp)
export default App
