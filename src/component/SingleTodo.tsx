import React from 'react';
import {Todo} from "../model.ts";
import {GrEdit} from "react-icons/gr";
import {MdDelete} from "react-icons/md";
import {IoIosCloudDone} from "react-icons/io";

type singleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: (newTodo: Todo) => void;
}

const SingleTodo = ({todo, todos, setTodos}: singleTodoProps) => {

    return (
        <form className="flex w-[440px] h-[10px] rounded-xl p-10 mt-20 ml-10 bg-singleTodo" >
            <span className="flex-1  p-5 border-none text-lg focus:outline-none relative bottom-9">
                {todo.message}
            </span>
            <div className="flex items-center justify-between">
                <span className="ml-4 text-lg cursor-pointer">
                    <GrEdit />
                </span>
                <span className="ml-4 text-lg cursor-pointer">
                    <MdDelete />
                </span>
                <span className="ml-4 text-lg cursor-pointer">
                    <IoIosCloudDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;