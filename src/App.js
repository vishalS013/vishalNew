
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  
  return (
    <>
    <div className='bg-gray-600 h-5/6'>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
     <Todos/>
    
    </div>
    </>
  )
}

export default App