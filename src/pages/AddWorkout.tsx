import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Save } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

interface WorkoutExercise {
  exerciseId: string;
  sets: string;
  reps: string;
  weight: string;
  feeling: number;
}

const AddWorkout: React.FC = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExercise[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedMuscle, setSelectedMuscle] = useState('');

  useEffect(() => {
    const storedExercises = localStorage.getItem('exercises');
    if (storedExercises) {
      setExercises(JSON.parse(storedExercises));
    }
  }, []);

  const handleAddExercise = () => {
    setWorkoutExercises([...workoutExercises, { exerciseId: '', sets: '', reps: '', weight: '', feeling: 3 }]);
  };

  const handleExerciseChange = (index: number, field: keyof WorkoutExercise, value: string | number) => {
    const updatedExercises = [...workoutExercises];
    updatedExercises[index] = { ...updatedExercises[index], [field]: value };
    setWorkoutExercises(updatedExercises);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedWorkoutExercises = workoutExercises.map(exercise => ({
      ...exercise,
      sets: parseInt(exercise.sets) || 0,
      reps: parseInt(exercise.reps) || 0,
      weight: parseFloat(exercise.weight) || 0,
    }));
    
    const workout = { date, exercises: formattedWorkoutExercises };
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    localStorage.setItem('workouts', JSON.stringify([...storedWorkouts, workout]));
    
    console.log('Workout saved:', workout);
    
    // Resetear el formulario
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setWorkoutExercises([]);
  };

  const filteredExercises = selectedMuscle
    ? exercises.filter(exercise => exercise.muscle === selectedMuscle)
    : exercises;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Añadir entrenamiento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block mb-1">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="muscle" className="block mb-1">Filtrar por músculo:</label>
          <select
            id="muscle"
            value={selectedMuscle}
            onChange={(e) => setSelectedMuscle(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Todos los músculos</option>
            {Array.from(new Set(exercises.map(e => e.muscle))).map(muscle => (
              <option key={muscle} value={muscle}>{muscle}</option>
            ))}
          </select>
        </div>
        {workoutExercises.map((workoutExercise, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="font-bold mb-2">Ejercicio {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`exercise-${index}`} className="block mb-1">Ejercicio:</label>
                <select
                  id={`exercise-${index}`}
                  value={workoutExercise.exerciseId}
                  onChange={(e) => handleExerciseChange(index, 'exerciseId', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Seleccionar ejercicio</option>
                  {filteredExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`sets-${index}`} className="block mb-1">Series:</label>
                <input
                  type="number"
                  id={`sets-${index}`}
                  value={workoutExercise.sets}
                  onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                  min="0"
                />
              </div>
              <div>
                <label htmlFor={`reps-${index}`} className="block mb-1">Repeticiones:</label>
                <input
                  type="number"
                  id={`reps-${index}`}
                  value={workoutExercise.reps}
                  onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                  min="0"
                />
              </div>
              <div>
                <label htmlFor={`weight-${index}`} className="block mb-1">Peso (kg):</label>
                <input
                  type="number"
                  id={`weight-${index}`}
                  value={workoutExercise.weight}
                  onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label htmlFor={`feeling-${index}`} className="block mb-1">Sensación (1-5):</label>
                <input
                  type="range"
                  id={`feeling-${index}`}
                  value={workoutExercise.feeling}
                  onChange={(e) => handleExerciseChange(index, 'feeling', parseInt(e.target.value))}
                  className="w-full"
                  min="1"
                  max="5"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExercise}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Añadir otro ejercicio
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Save className="mr-2" />
          Guardar entrenamiento
        </button>
      </form>
    </div>
  );
};

export default AddWorkout;