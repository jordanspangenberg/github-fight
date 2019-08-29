import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Component
// State
// Lifecycle
// UI

// Separation of Concerns!

class App extends React.Component {
    render() {
        return (
        <div>
            Hello Jordan!
        </div>
        )
    }
}


ReactDom.render(
    <App />,
    document.getElementById('app')
)