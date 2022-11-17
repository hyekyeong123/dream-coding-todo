import React, {useEffect, useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ selectedType }) {

  // 아래 방식으로 하면 좋은 성능이 나오지 않음(8.21 참조)
  // - 따라서 함수 호출시에는 콜백 함수로 감싸는것이 좋음
  // const [todos, setTodos] = useState(getTodosFromLocalStorage());
  // 근데 왜 똑같지..
  const [todos, setTodos] = useState(() => getTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const selectedTodos = getSelectedTodos(todos, selectedType);

  // todos가 변경될때마다 localstorage에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

// ******************************************
  return (
    <section className={styles.container}>
      <ul className={styles.listBox}>
        {selectedTodos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
function getSelectedTodos(todos, setSelectedType) {
  if (setSelectedType === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === setSelectedType);
}

// 로컬 저장소에서 todos 가져오기
function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
