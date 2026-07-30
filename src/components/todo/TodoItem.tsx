import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "@/types/todo";
import { Pencil, Trash2 } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.content}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div className={styles.todoInfo}>
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
        </div>
      </label>

      <div className={styles.actions}>
        <button
          className={styles.iconButton}
          type="button"
          onChange={() => onEdit(todo.id)}
          aria-label={`edit ${todo.text}`}
        >
          <Pencil size={20} strokeWidth={1.8} />
        </button>

        <button
          className={styles.iconButton}
          type="button"
          onClick={() => onDelete(todo.id)}
          aria-label={`delete ${todo.text}`}
        >
          <Trash2 size={20} strokeWidth={1.8} />
        </button>
      </div>
    </li>
  );
}
