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
    componentDidMount = () => {
        fetch("http://localhost:4000/planter")
          .then(x => {
            return x.text();
          })
          .then(responseBody => {
            let body = JSON.parse(responseBody);
            this.props.dispatch({
              type: "load-planters",
              planters: body.results
            });
          });
    }

    renderRoot = () => {
        return <div>hello world</div>
    }

    renderPlanters = () => {
        return <div> planters go here </div>
    }

    render = () => {
        return <div>
            <Route exact={true} path = '/' render = {this.renderRoot} />
            <Route exact={true} path = '/planters' render = {this.renderPlanters} />
            </div>
    }
}

let mapStateToProps = (state: State) => {
    return {planters: state.planters}
}

let App = connect(mapStateToProps)(UnconnectedApp)
export default App
