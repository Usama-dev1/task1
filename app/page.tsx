"use client";
import { useState } from "react";
import React from "react";
type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);
  
<<<<<<< HEAD
=======
  //if input is added
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

>>>>>>> 9b8cd67 (fixed bug)
  //when button is press add todo to object
  const handleAddTodo = () => {
    if (!input.trim()) {
      window.alert("no text found");
      return;
    }

    //new todo object
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setInput("");
  };

  const handleDelete = (e) => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-2 text-5xl text-black"> Todo List</h1>
        <div className="w-full h-20 mt-2 flex item-center justify-center space-x-2">
          <input
            className="w-80 h-10 border-2 rounded"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <button
            onClick={handleAddTodo}
            onKeyDown={handleAddTodo}
            className="w-20 h-10 rounded-md hover:bg-gray-700 bg-black text-white">
            Add Todo
          </button>
        </div>

        <div>
          <ul>
            {todo.map((t, index) => (
              <li key={t.id}>
                <div className="w-100 flex justify-between mt-2">
                  <div className="space-x-2">
                    <button
                      className="w-20 rounded bg-black text-white">
                      Delete
                    </button>
                    <button
                      className="w-20 rounded bg-black text-white">
                      Toggle
                    </button>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
