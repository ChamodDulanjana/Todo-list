import React from "react";
import {Todo} from "../model.ts";
import SingleTodo from "./SingleTodo.tsx";


interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList = ({todos, setTodos}:TodoListProps) => {
    return (
        <div className="flex justify-evenly w-[94%] flex-wrap items-center justify-center]">
           {/* {todos.map(todo => (
                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}*/}

            {todos?.map((todo, index) => (
                <SingleTodo
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;