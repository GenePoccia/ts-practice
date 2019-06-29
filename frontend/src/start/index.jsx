import ReactDom from 'react-dom'
import React from "react"
import { Provider } from 'react-redux'
import   App   from '../components/App.jsx'
import store from '../store/store.js'
import { BrowserRouter } from 'react-router-dom'
import '../css/main.css'

ReactDom.render( <Provider store= {store}>
<BrowserRouter>
<App />
</BrowserRouter>

</Provider>, document.getElementById('root'))