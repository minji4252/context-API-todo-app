import styled from "@emotion/styled";
import Button from "components/Button";
import DataView from "components/DataView";
import Title from "components/Title";
import TodoItem from "components/TodoItem";
import TodoList from "components/TodoList";
import { useState } from "react";

const WrapStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

function App() {
  const [todoList, setTodolist] = useState([
    "contextAPI 공부하기",
    "타입스크립트 공부하기",
    "JWT 공부하기",
  ]);

  const onDelete = todo => {
    setTodolist(todoList.filter(item => item != todo));
  };

  return (
    <WrapStyle>
      {/* <Title label="할 일 목록" />
      <TodoList todoList={todoList} onDelete={onDelete} /> */}
      <DataView todoList={todoList} onDelete={onDelete} />
    </WrapStyle>
  );
}

export default App;
