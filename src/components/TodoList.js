import styled from "@emotion/styled";
import TodoItem from "./TodoItem";

const TodoListWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoList = ({ todoList, onDelete }) => {
  return (
    <TodoListWrapStyle>
      {todoList.map(todo => (
        <TodoItem key={todo} label={todo} onDelete={() => onDelete(todo)} />
      ))}
    </TodoListWrapStyle>
  );
};

export default TodoList;
