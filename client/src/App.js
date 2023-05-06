import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SeeAllMovie from './pages/SeeAllMovie';
import NotFound from './components/NotFound';
import Details from './pages/Details';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/SeeAllMovie' element={<SeeAllMovie />} />
                    <Route path='/Details/:id' element={<Details />} />
                    <Route path='/SearchResult' element={<SearchResult />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
