import { FormEvent, useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos([...todos, todoText]);
  };

  return (
    <main className={`${styles.readingZone} ${styles.flowContainer}`}>
      <h1>TODO List</h1>
      <form onSubmit={addTodo} name="addTodo" className={styles.addTodoForm}>
        <h2>Create TODO</h2>
        <div className={styles.formControl}>
          <label htmlFor="todo-description">Description</label>
          <input
            onChange={(e) => setTodoText(e.target.value)}
            type="text"
            id="todo-description"
            name="description"
          />
        </div>
        <button className={styles.buttonPrimary}>➕ Add</button>
      </form>
      <TodosList todos={todos} />
      <menu className={styles.filtersMenu}>
        <li>All</li>
        <li>
          <a href="#">Open</a>
        </li>
        <li>
          <a href="#">Done</a>
        </li>
      </menu>
    </main>
  );
}

interface TodosListProps {
  todos: string[];
}

function TodosList({ todos }: TodosListProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <ul>
      {todos.map((todo, i) => (
        <li className={styles.todoItem} key={crypto.randomUUID()}>
          <input
            type="checkbox"
            id={`todo${i}-checkbox`}
            checked={checkedItems[i]}
            onChange={() => handleCheckboxChange(i)}
          />
          <label htmlFor={`todo${i}-checkbox`}>{todo}</label>
        </li>
      ))}
    </ul>
  );
}

export default App;
