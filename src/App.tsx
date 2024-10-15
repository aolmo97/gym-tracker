import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import Progress from './pages/Progress';
import ExerciseManager from './components/ExerciseManager';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/exercises" element={<ExerciseManager />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;