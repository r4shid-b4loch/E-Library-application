
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { STORAGE_KEY } from './constants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';

/**
 * PROJECT DESCRIPTION:
 * This is a Simple E-Library System created for academic purposes.
 * It uses localStorage for a simple username-only login session.
 * Features:
 * - Simple Login (no password)
 * - Protected Routes (redirects to login if not authenticated)
 * - Book Listing with categories
 * - Dark premium theme (Black & Dark Green)
 */

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(localStorage.getItem(STORAGE_KEY));

  // Function to handle login
  const handleLogin = (name: string) => {
    localStorage.setItem(STORAGE_KEY, name);
    setUsername(name);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUsername(null);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-black">
        {/* Only show Navbar if logged in */}
        {username && <Navbar username={username} onLogout={handleLogout} />}
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route 
              path="/login" 
              element={!username ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/" 
              element={username ? <Home username={username} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/books" 
              element={username ? <Books /> : <Navigate to="/login" />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="border-t border-green-900/30 py-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} E-Library System - Academic Project</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
