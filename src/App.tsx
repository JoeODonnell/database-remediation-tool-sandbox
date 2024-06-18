import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Card from './components/Card';
import Create from './components/Create';



function App() {
  return (
   <Routes>
    <Route path="/create" element={<Create />}  />     {/*This will create a new application and POST this new application to the database, he usues it for making New Hotels*/}
    <Route path="/applications/:id" element={<Details />}  />      {/*This will show the specific details of the application clciked on or searched for when opened up */}
    <Route path="/" element={<Card />}  />               {/*remember here you had to use 'exact path' for the homepage/landing page*/}
    <Route path="*" element={<NotFound />}  />                  {/*The NotFound path had to be at the bottom of the list for it to wrok with other routes */}
   </Routes>
  )
}

export default App;
