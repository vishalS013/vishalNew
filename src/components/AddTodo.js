import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editSave, handleChange,cancelTodo } from '../features/todo/todoSlice'


function AddTodo() {

  const input = useSelector((state) => state.todoinput );

  const updateTodo = useSelector((state) => state.updateTodo);
  const dispatch = useDispatch()
  // const [email, setEmail] = useState('')

  

  const addTodoHandler = (e) => {
    e.preventDefault()
   if(input === ""){
    return;
   }
   else  if (updateTodo !== null) {
    console.log("if condition in AddTodo component -=-=-=-=--=-=>",);
    dispatch(editSave({ id: updateTodo.id, text: input }))
  } else {
    console.log("else condition in AddTodo component",);
    dispatch(addTodo(input))
    // setInput('')
  }

    // setEmail('')
  }
 


  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo... here"
          value={input}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        {/* <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}

        <button
          type="submit"
          className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
         { updateTodo ? "Update Todo" : "Add Todo" } 
        </button>
        {
          updateTodo && 
        <button
        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={()=>dispatch(cancelTodo())}
        >
          Cancel
        </button>

        }

      </form>
    </div>
  )
}

export default AddTodo