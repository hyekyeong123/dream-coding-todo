import React, {useState} from 'react';
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList(props) {
  const [todos, setTodos] = useState([
    {
      id:1,
      content:'장보기',
      isDone: false
    },
    {
      id:2,
      content:'공부하기',
      isDone: false
    }
  ]);
// *********************************************
  // 새로운 todo를 todos에 업데이트 하기
  const handleAdd = (newTodos) => {
    // setTodos(todos.concat(newTodos)); 또는
    setTodos([...todos, newTodos])
  }

  const handleUpdate = (id) => {
    setTodos(
      todos.map(l => l.id === id ?
        // 나머지는 그대로 두고 isDone만 변경
        {
          ...l,
          isDone : !l.isDone
        }
        :
        l
      )
    )
  }
  const handleDelete = (id) => {
    setTodos(todos.filter(r => r.id !== id));
  }
// *********************************************
  return (
    <section>
      <ul>
        {
          todos.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </ul>

      {/* 함수만 전달해줌*/}
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
};
// *********************************************
