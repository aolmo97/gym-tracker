import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, PlusCircle, LineChart, List } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className= " hidden md:block  bg-blue-600 text-white p-4">
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
      {/* Mobile Navigation */}
      <nav className=" md:hidden fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-2 md:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <Dumbbell size={24} />
            <span className="text-xs mt-1 ml-2">Inicio</span>
          </Link>
          <Link to="/add" className="flex flex-col items-center">
            <PlusCircle size={24} />
            <span className="text-xs mt-1">Añadir</span>
          </Link>
          <Link to="/progress" className="flex flex-col items-center">
            <LineChart size={24} />
            <span className="text-xs mt-1">Progreso</span>
          </Link>
          <Link to="/exercises" className="flex flex-col items-center">
            <List size={24} />
            <span className="text-xs mt-1 mr-2">Ejercicios</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
