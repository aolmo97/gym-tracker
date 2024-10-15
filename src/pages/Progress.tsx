import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight: number;
  feeling: number;
}

interface Workout {
  date: string;
  exercises: WorkoutExercise[];
}

const Progress: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('');

  useEffect(() => {
    const storedWorkouts = localStorage.getItem('workouts');
    const storedExercises = localStorage.getItem('exercises');
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
    if (storedExercises) {
      setExercises(JSON.parse(storedExercises));
    }
  }, []);

  const getExerciseData = (exerciseId: string) => {
    return workouts
      .filter(workout => workout.exercises.some(e => e.exerciseId === exerciseId))
      .map(workout => {
        const exercise = workout.exercises.find(e => e.exerciseId === exerciseId);
        return {
          date: workout.date,
          weight: exercise?.weight || 0,
          reps: exercise?.reps || 0,
        };
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const exerciseData = selectedExercise ? getExerciseData(selectedExercise) : [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tu progreso</h2>
      <div className="mb-4">
        <label htmlFor="exercise-select" className="block mb-1">Selecciona un ejercicio:</label>
        <select
          id="exercise-select"
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar ejercicio</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
          ))}
        </select>
      </div>
      {selectedExercise && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">
            {exercises.find(e => e.id === selectedExercise)?.name}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={exerciseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#8884d8" name="Peso (kg)" />
              <Line yAxisId="right" type="monotone" dataKey="reps" stroke="#82ca9d" name="Repeticiones" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Progress;