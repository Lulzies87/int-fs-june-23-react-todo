import styles from "../App.module.scss";
import { Todo } from "../App";

interface TodosListProps {
  todos: Todo[];
  onTodoChecked: (todoId: string) => void;
}

function TodosList({ todos, onTodoChecked }: TodosListProps) {

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo.text}
            isChecked={todo.checked}
            onCheckboxChange={() => onTodoChecked(todo.id)}
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
        value={isChecked ? "true" : "false"}
      />
      <label htmlFor={`todo-${todo}`}>{todo}</label>
    </li>
  );
}

export default TodosList;
