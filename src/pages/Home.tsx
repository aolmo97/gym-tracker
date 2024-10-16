import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, LineChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    // Add padding and max-width for better responsiveness
    <div className="text-center p-4 max-w-4xl mx-auto">
      {/* Adjust text size for different screen sizes */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Bienvenido a GymTracker</h1>
      <p className="mb-6 sm:mb-8 text-sm sm:text-base">Registra tus entrenamientos y sigue tu progreso en el gimnasio.</p>
      {/* Change flex to grid for better responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full sm:w-auto"
        >
          <PlusCircle className="mr-2" size={20} />
          Añadir entrenamiento
        </Link>
        <Link
          to="/progress"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full sm:w-auto"
        >
          <LineChart className="mr-2" size={20} />
          Ver progreso
        </Link>
      </div>
    </div>
  );
};

export default Home;
