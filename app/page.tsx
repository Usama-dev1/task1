"use client";
import { useState } from "react";
import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 1fed0f718507ed32aae7ac97a6ff6213f4073799
type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // add todo
  const handleAddTodo = () => {
    if (!input.trim()) {
      window.alert("no text found");
      return;
    }

    const newTodo: Todos = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setInput("");
  };

  // delete todo
  const handleDelete = (id: number): void => {
    const filterTodo = todo.filter((t: Todos) => t.id !== id);
    setTodo(filterTodo);
  };

const handleToggle=(id:number)=>{
const updateTodo=todo.map(
  (t:Todos)=>t.id===id?{...t,completed:!t.completed}:t)
  setTodo(updateTodo)
}



  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-2 text-5xl text-black"> Todo List</h1>

        <div className="w-full h-20 mt-2 flex items-center justify-center space-x-2">
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
              <React.Fragment key={t.id}>
                <div className="w-100 flex justify-between mt-2">
                  <li className={t.completed?"line-through":""}>
                    <span className="mr-5">{index + 1}</span>
                    {t.text}
                  </li>

                  <div className="space-x-2">
                    <button
                      className="w-20 rounded bg-black text-white"
                      onClick={() => handleToggle(t.id)}>
                      {t.completed?"Done":"pending"}
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="w-23 rounded bg-black text-white">
                      Delete
                    </button>

                  </div>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
