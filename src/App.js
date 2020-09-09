import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './css/App.css';
import Layout from './components/Layout/Layout.js';
import "./css/App.css";
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInForm from './components/LogInForm/LogInForm';
import LogOut from './components/LogOut/LogOut';
import Home from './components/Home/Home';

import AboutUs from'./components/AboutUs/AboutUs.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import ContactUsForm from './components/ContactUs/ContactUsForm';
import SplashPage from './components/SplashPage/SplashPage.js';
import SplashPageLayout from './components/Layout/SplashPageLayout.js';




export default function App(props) {

  const [state, setState] = useState({
    email: '',
    password: '',
    isLogginIn: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      email: '',
      password: '',
      isLoggedIn: false
    });
    localStorage.clear();
  };

  const handleInput = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/signup', {
        email: state.email,
        password: state.password
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/login', {
        email: state.email,
        password: state.password
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      <div className="body">
        <Layout isLoggedIn={isLoggedIn}>
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
          <Route
            path="/aboutus"
            render={(props) => {
              return <AboutUs />;
            }}
          />
          <Route
            path="/contactus"
            render={(props) => {
              return <ContactUs />;
            }}
          />
          <Route
            path="/contactusform"
            render={(props) => {
              return <ContactUsForm />;
            }}
          />
          <Route
            path="/"
            render={(props) => {
              return <SplashPage />;
            }}
          />
        </Switch>
        </Layout>
      </div>
  );
}


