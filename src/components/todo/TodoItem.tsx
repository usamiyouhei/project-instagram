import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.content}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
        >
          {todo.text}
        </span>
        <time
          className={`${styles.time} ${todo.completed ? styles.completed : ""}`}
          dateTime={todo.createdAt}
        >
          {new Date(todo.createdAt).toLocaleString("ja-JP")}
        </time>
      </label>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.id}`}
      >
        Delete
      </button>
    </li>
  );
}
