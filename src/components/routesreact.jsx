import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Results from './results';

const Routesreact = () => {
  return (
  <div className='p-4'>
    
    <Routes>
      <Route path='/' element={<Navigate from='/' to='/search' />}/>
      <Route path='/search' element={<Results />}/>
      <Route path='/images' element={<Results />}/>
      <Route path='/news' element={<Results />}/>
      <Route path='/videos' element={<Results />}/>
    </Routes>
  </div>
  );
};

export default Routesreact
