import { useState } from 'react'
import FilterSection from './components/FilterSection'
import Hero from './components/Hero'
import ItemSection from './components/ItemSection'
import { GetValue } from './components/ThemeContext'

function App() {

  const {dark} = GetValue();

  const[todos,setTodos] = useState([]);
  const [fil, setFil] = useState("all")

  const filVal =(val)=>setFil(val)

  const addTodo = text =>{
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false
    }
    setTodos([newTodo,...todos])
  }

  const delTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  const toggler = (id) => {    
    setTodos(todos.map(todo =>{
      if(todo.id === id){
       return {...todo, completed: !todo.completed}} 
       return todo
    }))
  }

  const clearCompleted = () =>{
    setTodos(todos.filter(todo => !todo.completed))
  }
  
  let filList;

  const filterItem = () =>{
    
    if (fil === "all"){
      filList =todos
    } else if (fil === "active") {
      filList = todos.filter(todo => !todo.completed)
    }else if (fil === "completed") {
      filList = todos.filter(todo=> todo.completed)
    }
    return filList.map((todo) => <ItemSection key={todo.id} data={todo} clickHandler={toggler} delHandler={delTodo} />)
  }

  return (
    <div className = {`${dark ? '' : 'dark-body'}`}>
      <Hero addHandler={addTodo} />
      <div>
        <div className= {`${dark ? 'container' : 'darkcontainer'}`} >
          <div className={`${dark ? 'filterSect':'darkfilterSect'}`}>
            <FilterSection filterType={filVal}  />
          </div>
          
          
          <div>
            {filterItem()}
          </div> 
          
          <div className='footer'>
            <p>{filList.length} {filList.length === 1 ? 'item':'items'}</p>
            <button onClick={clearCompleted} type='button'>
              Clear completed
            </button>
          </div>
        </div>        
      </div>      
    </div>
  )
}

export default App
