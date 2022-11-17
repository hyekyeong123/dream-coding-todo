import './App.css';
import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import {DarkModeProvider} from "./context/DarkModeContext";

function App() {

  // 배열로 정리
  const Types = ["all", "active", "completed"];
  const [selectedType, setSelectedType] = useState(Types[0]);
  // ******************************************
  return (
    <DarkModeProvider>
      <Header
        Types={Types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <TodoList selectedType={selectedType}/>
    </DarkModeProvider>
  );
}
export default App;
