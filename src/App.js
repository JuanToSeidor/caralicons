import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import blur from './img/blur.png';
import Listado from './pages/listado'
import Brands from './pages/brands';

function App() {
  
  const [activeTab, setActiveTab] = useState('/');
  const [sincePrint, setSincePrint] = useState("74px"); // Estado para sincePrint
  const [colorPrint, setcolorPrint ]= useState("#07153");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSizeChange = (event) => {
    setSincePrint(event.target.value); 
  };

  const handleColorChange = (event) => {
    setcolorPrint(event.target.value); 
  };

  return (
    
    <div className="App">
      <header className="App-header">
        
      <div className='hero'>
        <div className='container'>
            <img src={blur} className='blur' />
            <h1>Ready to use seidor icons for react.</h1>
        </div>
      </div>

        
        
        <Router>
        <div className='container'>
            <div className='flex_head'>
              <ul className='tabs'>
                <li className={activeTab === '/' ? 'active' : ''}>
                  <Link to="/" onClick={() => handleTabClick('/')}>All</Link>
                </li>
                <li className={activeTab === '/colors' ? 'active' : ''}>
                  <Link to="/colors" onClick={() => handleTabClick('/colors')}>Brands</Link>
                </li>
              </ul>
              <p>V1.00.00</p>

            </div>
        
        </div>
        <div className='container'>
            <label>Selec size</label>
            <select className="custom-select" onChange={handleSizeChange} value={sincePrint}>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
              <option value="35px">Custom</option>
            </select>
            

            <label>Selec Color</label>
            <select className="custom-select" onChange={handleColorChange} value={colorPrint}>
              <small>Seidor Color</small>
              <option value="#07153"> <div className="piccolor"></div>Seidor Hard Blue</option>
              <option value="#263C7A">Seidor Medium Blue</option>
              <option value="#66B6FF">Seidor Soft Blue</option>
              <hr></hr>
              <option value="#0191FF">Info</option>
              <option value="#44CA9F">Aprove</option>
              <option value="#F88A00">Warning</option>
              <option value="#EF4444">Danger</option>
              <option value="#3C096C">indido</option>
              <option value="#FF2E8C">Sakura</option>

            </select>
        </div>
        
        
        
        <Routes>
          
          <Route path="/" element={<Listado sicePrint={sincePrint} colorPrint={colorPrint} />} />
          <Route path="/colors" element={<Brands />} />
        </Routes>

        </Router>

      </header>
    </div>
  );
}

export default App;
