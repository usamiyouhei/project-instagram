"use client";

import React, { useState } from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "@/types/todo";
import { Pencil, Trash2 } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (!trimmedText) {
      return;
    }

    onEdit(todo.id, trimmedText);
    setIsEditing(false);
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div className={styles.todoInfo}>
          {isEditing ? (
            <input
              className={styles.editInput}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
            />
          ) : (
            <span
              className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
            >
              {todo.text}
            </span>
          )}
          <time
            className={`${styles.createdAt} ${todo.completed ? styles.completed : ""}`}
            dateTime={todo.createdAt}
          >
            {new Date(todo.createdAt).toLocaleString("ja-JP")}
          </time>
        </div>
      </div>

      <div className={styles.actions}>
        {isEditing ? (
          <button
            className={styles.saveButton}
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className={styles.iconButton}
            type="button"
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(true);
            }}
            aria-label={`edit ${todo.text}`}
          >
            <Pencil size={20} strokeWidth={1.8} />
          </button>
        )}
        {isEditing ? (
          <button
            className={styles.cancelButton}
            type="button"
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(false);
            }}
          >
            cancel
          </button>
        ) : (
          <button
            className={styles.iconButton}
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label={`delete ${todo.text}`}
          >
            <Trash2 size={20} strokeWidth={1.8} />
          </button>
        )}
      </div>
    </li>
  );
}
