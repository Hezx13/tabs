import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
    HomePage,
    PathPage,
    ControlPage,
    BlocksPage,
    VialsPage,
    SetupPage,
    LogsPage,
    HelpPage
    } from './pages';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/path" element={<PathPage />} />
        <Route path="/control" element={<ControlPage />} />
        <Route path="/blocks" element={<BlocksPage />} />
        <Route path="/vials" element={<VialsPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
