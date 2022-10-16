import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes as Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Header/>
    < Landing />
    <Switch>
    <Route exact path='/aadann_project/' element={<Home />}></Route>
    <Route path='/aadann_project/Services'  element={<Services />}></Route>
    <Route path='/aadann_project/Contact'  element={<Contact />}></Route>
    <Route path='/aadann_project/Blog'  element={<Blog />}></Route>
    <Route path='/aadann_project/Login'  element={<Login />}></Route>
    <Route path='/aadann_project/Register'  element={<Register />}></Route>
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
