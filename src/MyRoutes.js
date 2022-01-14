import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactProvider from './Components/Context/ContactProvider';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import AddContact from './Components/Pages/AddContact/AddContact';
import EditContact from './Components/Pages/EditContact/EditContact';
import MainPage from './Components/Pages/MainPage/MainPage';

const MyRoutes = () => {
    return (
    <ContactProvider>
        <BrowserRouter>
            <MyNavbar/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                     <Route path="/add" element={<AddContact/>}/>
                     <Route path="/edit/:name/:id" element={<EditContact/>}/> 
                 </Routes>
        </BrowserRouter>
    </ContactProvider>
            
        
    );
};

export default MyRoutes;