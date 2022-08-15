import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactSwitch from 'react-switch';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieDetail from './components/Movie/Detail/Detail';
import './App.scss'




export const themeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    }

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            <div className='App' id={theme} >
                <div className='switch'>
                    <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}:</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                </div>
                <BrowserRouter>
                    <Header />
                    <div className='container'>
                        <Routes >
                            <Route path='/' exact element={<Home />} />
                            <Route path='/movie/:imdbID' element={<MovieDetail />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </themeContext.Provider>
    )
}



export default App;
