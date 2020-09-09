import React from 'react';
import LogOut from '../LogOut/LogOut';
import './NavBar.css';



export default function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <a href="/aboutus" class="navbar-item about" style={{}}>
                About <br />Us
            </a>
        </li>,
        <li key={2}>
            <a href="/contactus" class="navbar-item contact">
                Contact Us
            </a>
        </li>,
        <li key={3}>
            <div class="navbar-item has-dropdown is-hoverable">
                <a href="/order" class="navbar-link">
                    Order Now
                </a>
                <div class="navbar-dropdown">
                    <a herf="/signiturebowls" class="navbar-item">
                        Signature Better Bowls
                    </a>
                    <a href="create" class="navbar-item">
                        Create A Better Bowl
                    </a>
                </div>
            </div>
        </li>

    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <li key={4}>
                <LogOut />
            </li>
        );
    } else {
        navBarItems.push(
            <li key={5}>
                <div class="navbar-end">
                    <div class="navbar-item auth">
                        <div class="buttons">
                            <a href="/signup" class="button is-info">
                                <strong>Sign up</strong>
                            </a>
                            <a href="/login" class="button is-light">
                                Log in
                                </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a href="/home">
                    <img id="nav-logo" src="https://i.imgur.com/0Z61aZV.png"
                        style={{ width: '250px' }}
                    />
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <ul>{navBarItems}</ul>
                </div>
            </div>
        </nav>
    );
}



