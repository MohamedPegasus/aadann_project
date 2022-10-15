import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
    <div className='gradient__bg'>
    <Router>
    <Header/>
    < Landing />
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route path='/Services'  element={<Services />}></Route>
    <Route path='/Contact'  element={<Contact />}></Route>
    <Route path='/Blog'  element={<Blog />}></Route>
    <Route path='/Login'  element={<Login />}></Route>
    <Route path='/Register'  element={<Register />}></Route>
    </Routes>
    
    <Footer />
    </Router>
    </div>
    </div>
  );
}

export default App;
