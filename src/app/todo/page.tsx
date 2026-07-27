"use client";

import React, { useState } from "react";
import styles from "./todo.module.scss";
import { Todo } from "@/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <main>
      <h1>Todo Apps</h1>
    </main>
  );
}
