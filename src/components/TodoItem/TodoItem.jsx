import React from 'react';
import { GrCheckboxSelected, GrCheckbox, GrTrash } from "react-icons/gr";

export default function TodoItem({item, handleUpdate, handleDelete}) {
// *********************************************
  return (
    <div>
      <li>

        {/* v1. input의 checkbox 사용 */}
        <input
          type="checkbox"
          id='checkbox'
          checked={}
        />
        <label htmlFor="checkbox">{item.content}</label>

        {/* v2. 아이콘 사용하기 */}
        {item.isDone === false
          ? <GrCheckbox onClick={() => handleUpdate(item.id)}/>
          : <GrCheckboxSelected onClick={() => handleUpdate(item.id)}/>
        }

        {item.content}

        <GrTrash
          onClick={() => handleDelete(item.id)}
          style={{cursor:"pointer"}}
        />
      </li>
    </div>
  );
};

