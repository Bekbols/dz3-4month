import Todo from "../../components/todo/Todo";
import classes from "./todosPage.module.css";

function TodosPage() {

    const todos = ['todo 1', 'todo 2', 'todo 3'];

    return (
        <div className={classes.color}>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodosPage