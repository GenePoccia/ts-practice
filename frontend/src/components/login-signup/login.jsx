import React from 'react'
import { connect } from 'react-router-dom'

class UnconnectedLogin extends App {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
handleUsernameChange = event => {
    this.setState({ username: event.target.value})
}

handlePasswordChange = event => {
    this.setState({password: event.target.value})
}

handleSubmit = event => {
    evt.preventDefault()

    let data = new FormData()
    data.append("username", this.state.username)
    data.append("password", this.state.password)
}


render = () => {
    return <div>
        <form onSubmit={this.handleSubmit}>
            <span>Username</span>
            <input type='text' onChange={this.handleUsernameChange} placeholder='Username'/>
            <span>Password</span>
            <input type='text' onChange={this.handlePasswordChange} placeholder='Password' />
            <input type='submit' />
        </form>
    </div>
}


}

let Login = connect()(UnconnectedLogin)
export default Login