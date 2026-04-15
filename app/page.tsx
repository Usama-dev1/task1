"use client"
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
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setInput("")
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-2 text-5xl text-black"> Todo List</h1>
        <input
          className="w-80 mt-2 border-2"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddTodo} className="w-40 bg-red-400">
          Add Todo
        </button>
        <div>
          <ul>
            {todo.map((t) => (
              <li key={t.id}>{t.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
