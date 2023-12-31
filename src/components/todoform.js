import React,{useState,useEffect,useRef} from 'react'

function Todoform(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value : "");


    const inputRef = useRef(null)
    useEffect(() =>{
      inputRef.current.focus()
    })

    const handleChange = e =>{
      setInput(e.target.value);
    };

const handleSumbit = e =>{
    e.preventDefault();


    props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
    });
   setInput("");
};

  return (
    <form className='todo-form' onSubmit={handleSumbit}>
        {props.edit ? (<>
        
          <input type="text"
         placeholder='update your item' 
         value={input}
         name='text'
         className='todo-input edit'
         onChange={handleChange}
         ref={inputRef}
         />
         <button className='todo-button edit'>update</button>
        </>):
       ( <>
        
          <input type="text"
         placeholder='Add a todo' 
         value={input}
         name='text'
         className='todo-input'
         onChange={handleChange}
         ref={inputRef}
         />
         <button className='todo-button'>Add todo</button>
        </>)}
        
       
    </form>
  )
}

export default Todoform;