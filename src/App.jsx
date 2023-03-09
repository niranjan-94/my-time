/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Today from './pages/1.Today';
import Calender from './pages/2.Calender/index';
import Report from './pages/3.Report/index';
import Setting from './pages/4.Setting/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Today />} />
          <Route path="calender" element={<Calender />} />
          <Route path="report" element={<Report />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
  
export default App;
