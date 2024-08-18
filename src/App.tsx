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
   <div className="flex flex-col items-center h-[100vw] min-w-[100vw] font-KoHO bg-purple-50">
       <span className="text-4xl text-black font-medium items-center mt-8 mb-2 z-10">Todo-List</span>
       <p className="mb-10 font-medium text-md">Make your tasks unforgettable</p>

       <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
       <TodoList todos={todos} setTodos={setTodos}/>
   </div>
  )

}

export default App
