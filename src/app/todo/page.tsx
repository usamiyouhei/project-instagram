"use client";

import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { Todo } from "@/types/todo";
import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";

const TODOS_STORAGE_KEY = "todos";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY);

    if (!storedTodos) {
      return;
    }

    try {
      return JSON.parse(storedTodos);
    } catch {
      console.error("Failed to load todos.");
    }
  });

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTask = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    const trimmedText = newText.trim();
    if (!trimmedText) {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: trimmedText,
            }
          : todo,
      ),
    );
  };

  const inCompleteCount = todos.filter((todo) => !todo.completed).length;

  return (
    <main className={styles.page}>
      <section className={styles.todoCard}>
        <div className={styles.heading}>
          <p className={styles.label}>Next.js Mini Project</p>
          <h1 className={styles.title}>Todo App</h1>
          <p className={styles.description}>
            Organize your tasks and keep moving forward.
          </p>
        </div>

        <TodoForm onAdd={addTodo} />

        <div className={styles.status}>
          <span>{inCompleteCount} tasks remaining</span>
          <span>{todos.length} total</span>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </section>
    </main>
  );
}
