import React, {useRef} from 'react';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (event: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAddTodo}:InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(event) => {
                handleAddTodo(event);
                inputRef.current?.blur();
            }}
            className="flex relative items-center w-[80%] justify-center">
            <input
                ref={inputRef}
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter Todo"
                className="w-full px-10 py-3 rounded-3xl text-xl focus:shadow-custom focus:outline-none border-2 border-purple-500 ]"
            />
            <button
                type="submit"
                className="absolute w-[47px] h-[47px] right-0 m-1 rounded-full text-lg bg-purple-500 text-white hover:bg-purple-400 active:text-sm">Go</button>
        </form>
    );
};

export default InputField;