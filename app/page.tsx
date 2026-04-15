"use client";
import { useEffect, useState } from "react";
type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);
  //load from localstorage
  useEffect(() => {
    const getTodos = () => {
      try {
        const getTodo = localStorage.getItem("todos");
        if (getTodo) {
          setTodo(JSON.parse(getTodo));
        }
      } catch (err) {
        console.error("failed to fetch todos from storage", err);
      }
    };
    getTodos();
  }, []);
  //set to local storage if changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  //if input is added
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

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
            className="w-80 h-10 border-2"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <button
            onClick={handleAddTodo}
            className="w-20 h-10 rounded-md hover:bg-gray-700 bg-black text-white">
            Add Todo
          </button>
        </div>

        <div>
          <ul>
            {todo.map((t, index) => (
              <>
                <div className="w-100 flex justify-between  mt-2">
                  <li key={t.id}>
                    <span className="mr-5">{index + 1}</span>
                    {t.text}
                  </li>
                  <button
                    className="w-20 rounded bg-black text-white"
                    onClick={handleDelete(t.id)}>
                    Delete
                  </button>
                  <button
                    className="w-20 rounded bg-red-400 text-white"
                    onClick={handleDelete(t.id)}>
                    Edit
                  </button>
                  <button
                    className="w-20 rounded bg-yellow-400 text-white"
                    onClick={handleDelete(t.id)}>
                    Toggle
                  </button>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
