import { FormEvent, useState } from "react";
import styles from "./App.module.scss";
import TodosList from "./components/TodosList";
import Filters from "./components/Filters";

export type Todo = { text: string; checked: boolean; id: string };

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "open" | "done">(
    "all"
  );

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: todoText, checked: false, id: crypto.randomUUID() },
    ]);
  };

  const visibleTodos =
    activeFilter === "all"
      ? todos
      : activeFilter === "open"
      ? todos.filter((todo) => !todo.checked)
      : todos.filter((todo) => todo.checked);

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
      <TodosList
        todos={visibleTodos}
        onTodoChecked={(todoId) =>
          setTodos(
            todos.map((todo) =>
              todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
            )
          )
        }
      />
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </main>
  );
}

export default App;
