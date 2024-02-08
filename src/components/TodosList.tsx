import { useState } from "react";
import styles from "../App.module.scss";

interface TodosListProps {
  todos: string[];
  filter: "all" | "open" | "done";
}

function TodosList({ todos, filter }: TodosListProps) {
  const [todoStates, setTodoStates] = useState<{ [key: string]: boolean }>({});

  const handleTodoCheckboxChange = (todoId: string) => {
    setTodoStates(prevState => ({
      ...prevState,
      [todoId]: !prevState[todoId],
    }));
  };

  const getOpenTodos = () => {
    return todos.filter((todo) => !todoStates[todo]);
  };

  const getDoneTodos = () => {
    return todos.filter((todo) => todoStates[todo]);
  };

  return (
    <ul>
      {filter === "all"
        ? todos.map((todo) => {
            return (
              <TodoItem
                key={todo}
                todo={todo}
                isChecked={todoStates[todo] || false}
                onCheckboxChange={() => handleTodoCheckboxChange(todo)}
              />
            );
          })
        : filter === "open"
        ? getOpenTodos().map((todo) => {
            return (
              <TodoItem
                key={todo}
                todo={todo}
                isChecked={todoStates[todo] || false}
                onCheckboxChange={() => handleTodoCheckboxChange(todo)}
              />
            );
          })
        : getDoneTodos().map((todo) => {
            return (
              <TodoItem
                key={todo}
                todo={todo}
                isChecked={todoStates[todo] || false}
                onCheckboxChange={() => handleTodoCheckboxChange(todo)}
              />
            );
          })}
    </ul>
  );
}

interface TodoItemProps {
  todo: string;
  isChecked: boolean;
  onCheckboxChange: () => void;
}

function TodoItem({ todo, isChecked, onCheckboxChange }: TodoItemProps) {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        id={`todo-${todo}`}
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      <label 
      htmlFor={`todo-${todo}`}
      >{todo}</label>
    </li>
  );
}

export default TodosList;
