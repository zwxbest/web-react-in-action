import React from 'react'
import ReactDOM from 'react-dom'
import App from  './App.jsx'

const renderMethod = module.hot? ReactDOM.hydrate:ReactDOM.render;

renderMethod(<App/>, document.getElementById("root"));