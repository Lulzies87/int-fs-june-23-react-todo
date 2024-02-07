import { useState } from "react";
import styles from "../App.module.scss";

interface TodosListProps {
  todos: string[];
  filter: "all" | "open" | "done";
}

function TodosList({ todos, filter }: TodosListProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const getOpenTodos = () => {
    return todos.filter((_, index) => !checkedItems[index]);
  };

  const getDoneTodos = () => {
    return todos.filter((_, index) => checkedItems[index]);
  };

  return (
    <ul>
      {filter === "all"
        ? todos.map((todo, i) => {
            const todoId = crypto.randomUUID();
            return (
              <li className={styles.todoItem} key={todoId}>
                <input
                  type="checkbox"
                  id={`todo-${todoId}`}
                  checked={checkedItems[i]}
                  onChange={() => handleCheckboxChange(i)}
                />
                <label htmlFor={`todo-${todoId}`}>{todo}</label>
              </li>
            );
          })
        : filter === "open"
        ? getOpenTodos().map((todo, i) => {
            const todoId = crypto.randomUUID();
            return (
              <li className={styles.todoItem} key={todoId}>
                <input
                  type="checkbox"
                  id={`todo-${todoId}`}
                  checked={checkedItems[i]}
                  onChange={() => handleCheckboxChange(i)}
                />
                <label htmlFor={`todo-${todoId}`}>{todo}</label>
              </li>
            );
          })
        : getDoneTodos().map((todo, i) => {
            const todoId = crypto.randomUUID();
            return (
              <li className={styles.todoItem} key={todoId}>
                <input
                  type="checkbox"
                  id={`todo-${todoId}`}
                  checked={checkedItems[i]}
                  onChange={() => handleCheckboxChange(i)}
                />
                <label htmlFor={`todo-${todoId}`}>{todo}</label>
              </li>
            );
          })}
    </ul>
  );
}

export default TodosList;
