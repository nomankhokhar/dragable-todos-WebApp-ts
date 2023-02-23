import React, { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e : React.FormEvent) => void;
}

const InputField = ({todo , setTodo , handleAdd} : Props) => {


    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {handleAdd(e) ; 
        inputRef.current?.blur()} }>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter your task..."
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      
      <button type="submit" className="input__submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
