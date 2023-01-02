import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { logoutUser } from '../redux/actions/UserActions'
export default function Navbar() {
    const { login } = useSelector(state => state.RegisterUser)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Hexotix</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link text-light active" to="/">Home</Link>
                        <Link class="nav-link text-light" to="/about">About</Link>
                        <Link class="nav-link text-light" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            {
                login && <button className="btn btn-light" onClick={e => dispatch(logoutUser())}>LogOut</button>

            }
        </nav>
    </>
}
