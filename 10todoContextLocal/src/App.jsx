import './App.css'
import { TodoProvider } from './Context'

function App() {

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-zxl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1>
            Manage Your Todos
          </h1>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
