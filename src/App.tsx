import React, { useState } from 'react'
import InputField from "./component/InputField.tsx";
import {Todo} from "./model.ts";
import TodoList from "./component/TodoList.tsx";



function App() {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);



    const handleAddTodo = (event: React.FormEvent) => {
        event.preventDefault();

        const date = Date.now()
        if(todo){
            setTodos([...todos, {id: date.toString(), message:todo, isDone:false}]);
            setTodo("");
        }

    }
    console.log(todos);


  return (
   <div className="flex flex-col items-center h-[100%] min-w-[100vw] font-Neucha bg-[#2f74c0]">
        <span className="text-4xl text-white font-medium items-center m-10 z-10">Todo-List</span>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} setTodos={setTodos}/>
   </div>
  )

}

export default App
