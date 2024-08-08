import React, {FormEvent, useEffect, useRef, useState} from 'react';
import {Todo} from "../model.ts";
import {GrEdit} from "react-icons/gr";
import {MdDelete} from "react-icons/md";
import {IoIosCloudDone} from "react-icons/io";

type singleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo = ({todo, todos, setTodos}: singleTodoProps) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.message);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        );
    }

    const handleEdit = (event:FormEvent<HTMLFormElement>, id: number) => {
        event.preventDefault();

        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo,  message:editTodo} : todo)
        );
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className="flex w-[440px] h-[10px] rounded-xl p-10 mt-20 ml-10 bg-singleTodo"
              onSubmit={(event) => {
                  handleEdit(event, todo.id);
              }}>
            {edit ? (
                <input
                    ref={inputRef}
                    className=" w-[208px] h-8 rounded-md text-sm font-medium relative border
                    border-gray-200 shadow-sm focus:outline-none bottom-4 right-5"
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                />
            ): (
                todo.isDone ? (
                    <s className="flex-1  p-5 border-none text-lg focus:outline-none relative bottom-9 max-w-52">
                        {todo.message}
                    </s>
                ) : (
                    <span className="flex-1  p-5 border-none text-lg focus:outline-none relative bottom-9 max-w-52 focus:animate-none">
                {todo.message}
                </span>
                )
            )}

            <div className="flex items-center justify-between relative left-10" id="single">
                <span
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                    className="ml-4 text-lg cursor-pointer">
                    <GrEdit />
                </span>
                <span
                    onClick={() => {handleDelete(todo.id)}}
                    className="ml-4 text-lg cursor-pointer">
                    <MdDelete />
                </span>
                <span
                    onClick={() => {handleDone(todo.id)}}
                    className="ml-4 text-lg cursor-pointer">
                    <IoIosCloudDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;