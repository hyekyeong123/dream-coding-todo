import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, content, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={`checkbox_${id}`}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox_${id}`} className={styles.text}>{content}</label>
      <button onClick={handleDelete} className={styles.btn}><FaTrashAlt/></button>
    </li>
  );
}
