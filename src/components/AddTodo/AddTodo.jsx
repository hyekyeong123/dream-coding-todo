import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css';
/* 추가하기 */
export default function AddTodo({onAdd}) {
  const [nextId, setNextId]  = useState(3);
  const [inputContent, setInputContent] = useState("");
// *********************************************
  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  }

  // 버튼 클릭시
  const todosAdd = () => {
    if(inputContent.trim().length === 0){
      alert("값을 입력해주세요.");
      return false;
    }

    const newTodos = {
      // id:nextId, 또는
      id:uuidv4(),
      content:inputContent,
      isDone:false
    }
    onAdd(newTodos);
    setNextId(nextId+1);
    setInputContent("");
  }

// *********************************************
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={inputContent}
        onChange={handleInputContent}
      />
      <button
        type="button"
        onClick={todosAdd}
        className={styles.button}
      >Add</button>
    </form>
  );
};

