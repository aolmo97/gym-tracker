import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, LineChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a GymTracker</h1>
      <p className="mb-8">Registra tus entrenamientos y sigue tu progreso en el gimnasio.</p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <PlusCircle className="mr-2" />
          Añadir entrenamiento
        </Link>
        <Link
          to="/progress"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <LineChart className="mr-2" />
          Ver progreso
        </Link>
      </div>
    </div>
  );
};

export default Home;