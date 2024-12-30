import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './sections/notes/Notes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddNote from './sections/addNote/AddNote';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="add-note" element={<AddNote />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;