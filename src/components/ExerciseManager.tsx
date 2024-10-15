import React, { useState, useEffect } from 'react';
import { PlusCircle, Save } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

const muscles = [
  'Pecho', 'Espalda', 'Hombros', 'Bíceps', 'Tríceps',
  'Piernas', 'Glúteos', 'Abdominales', 'Antebrazos'
];

const ExerciseManager: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [newExercise, setNewExercise] = useState({ name: '', muscle: '' });

  useEffect(() => {
    const storedExercises = localStorage.getItem('exercises');
    if (storedExercises) {
      setExercises(JSON.parse(storedExercises));
    }
  }, []);

  const handleAddExercise = () => {
    if (newExercise.name && newExercise.muscle) {
      const updatedExercises = [
        ...exercises,
        { ...newExercise, id: Date.now().toString() }
      ];
      setExercises(updatedExercises);
      localStorage.setItem('exercises', JSON.stringify(updatedExercises));
      setNewExercise({ name: '', muscle: '' });
    }
  };

  const handleDeleteExercise = (id: string) => {
    const updatedExercises = exercises.filter(exercise => exercise.id !== id);
    setExercises(updatedExercises);
    localStorage.setItem('exercises', JSON.stringify(updatedExercises));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Gestionar Ejercicios</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nombre del ejercicio"
          value={newExercise.name}
          onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
          className="flex-grow mr-2 p-2 border rounded"
        />
        <select
          value={newExercise.muscle}
          onChange={(e) => setNewExercise({ ...newExercise, muscle: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Seleccionar músculo</option>
          {muscles.map((muscle) => (
            <option key={muscle} value={muscle}>{muscle}</option>
          ))}
        </select>
        <button
          onClick={handleAddExercise}
          className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <PlusCircle className="mr-2" size={18} />
          Añadir
        </button>
      </div>
      <ul className="space-y-2">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{exercise.name}</span>
            <span className="text-sm text-gray-600">{exercise.muscle}</span>
            <button
              onClick={() => handleDeleteExercise(exercise.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseManager;