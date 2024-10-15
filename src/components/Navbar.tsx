import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, PlusCircle, LineChart, List } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <Dumbbell className="mr-2" />
          GymTracker
        </Link>
        <div className="flex space-x-4">
          <Link to="/add" className="flex items-center">
            <PlusCircle className="mr-1" size={18} />
            Añadir
          </Link>
          <Link to="/progress" className="flex items-center">
            <LineChart className="mr-1" size={18} />
            Progreso
          </Link>
          <Link to="/exercises" className="flex items-center">
            <List className="mr-1" size={18} />
            Ejercicios
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;