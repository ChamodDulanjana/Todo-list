import React, { useState } from 'react'
import InputField from "./component/InputField.tsx";
import {Todo} from "./model.ts";
import TodoList from "./component/TodoList.tsx";



function App() {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const handleAddTodo = (event: React.FormEvent) => {
        event.preventDefault();

        if(todo){
            setTodos([...todos, {id: Date.now(), message:todo, isDone:false}]);
            setTodo("");
        }
    }


  return (
   <div className="flex flex-col items-center h-[100vw] min-w-[100vw] font-Neucha bg-mainBg">
           <span className="text-4xl text-white font-medium items-center mt-5 mb-10 z-10">Todo-List</span>

       <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
       <TodoList todos={todos} setTodos={setTodos}/>
   </div>
  )

}

export default App
