import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Calendar from './pages/Calendar';
import Charts from './pages/Charts';
import Tables from './pages/Tables';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div style={{ flex: 1, marginLeft: collapsed ? 70 : 230, transition: 'margin-left 0.3s ease' }}>
          <Navbar collapsed={collapsed} />
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
