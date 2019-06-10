import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Route} from "react-router-dom";

interface State {
    planters: object[];
}

class UnconnectedApp extends Component<any> {
    constructor(props: object) {
        super(props);
    }
    public componentDidMount = () => {
        fetch("http://localhost:4000/planter")
          .then((x) => {
            return x.text();
          })
          .then((responseBody) => {
            const body = JSON.parse(responseBody);
            this.props.dispatch({
              type: "load-planters",
              planters: body.results,
            });
          });
    }

    public renderRoot = () => {
        return <div>hello world</div>;
    }

    public renderPlanters = () => {
        return <div> planters go here </div>;
    }

    public render = () => {
        return <div>
            <Route exact={true} path = "/" render = {this.renderRoot} />
            <Route exact={true} path = "/planters" render = {this.renderPlanters} />
            </div>;
    }
}

const mapStateToProps = (state: State) => {
    return {planters: state.planters};
};

const App = connect(mapStateToProps)(UnconnectedApp);
export default App;
