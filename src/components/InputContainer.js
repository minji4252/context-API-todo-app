import { useState } from "react";
import ShowInputButton from "./ShowInputButton";
import TodoInput from "./TodoInput";

const InputContainer = ({ onAdd }) => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onAddTodo = todo => {
    onAdd(todo);
    setShowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <TodoInput onAdd={onAddTodo} />}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
