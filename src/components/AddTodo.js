import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 
import Todos from './Todos'

function AddTodo() {

    const [input, setInput] = useState('')
    // const [email, setEmail] = useState('')
    const [show,setShow]=useState(null)

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
      
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
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
    {
      show ? (
        <button
        type="submit"
        className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
      ):
      (
        <button
        type="submit"
        className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        update Todo
      </button>
      )
    }
    </form>
   </div>
  )
}

export default AddTodo