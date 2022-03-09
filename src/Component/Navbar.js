import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" to="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/comp1">Component1</Link>
                        <Link className="nav-item nav-link" to="/comp2">Component2</Link>
                        <Link className="nav-item nav-link" to="/comp3">Component3</Link>
                        <Link className="nav-item nav-link" to="/classBasedComp">ClassBasedComp</Link>
                        <Link className="nav-item nav-link" to="/getpost">Get Post</Link>
                        <Link className="nav-item nav-link" to="/xyz">Test Comp</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
