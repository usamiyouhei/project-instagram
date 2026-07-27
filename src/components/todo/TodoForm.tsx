"use client";
import React, { useState } from "react";
import styles from "./TodoForm.module.scss";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onAdd(trimmedText);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="New todo"
      />
      <button className={styles.button} type="submit">
        + Add
      </button>
    </form>
  );
}
