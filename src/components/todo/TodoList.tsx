import React from "react";
import styles from "./TodoList.module.scss";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return <p className={styles.empty}>No Tasks yet.</p>;
  }
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
