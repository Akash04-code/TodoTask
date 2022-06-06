import React,{useState} from 'react'
import TodoList from '../Component/TodoList';


const Todotask = () => {
    const [item,setItem] = useState("");
    const [data,setData] = useState([])
    const eventHandler = (e)=>{
        setItem(e.target.value)
    }
    const Add = ()=>{
      setData((oldItem)=>{
          return [...oldItem,item];
          });
          setItem("");
    }
    const deleteHandler = (id)=>{
        console.log("Deleted");
        setData((oldItem)=>{
            return oldItem.filter((arrEel,index)=>{
              return index !== id;
            })
        })
      }
  return (
    <div className='main-div'>
      <div className='center-div'>
       <br/>
       <h1>Todo List</h1>
       <br/>
       <input type="text" placeholder='Add a Items'
        value={item} onChange={eventHandler} />
       <button type='button'onClick={Add} >+</button>

       <ul>
            {
                data.map((itemValue,index)=>{
                 return <TodoList text={itemValue}
                          key={index} id={index}
                          onSelect={deleteHandler}/>
                })
            }
       </ul>
      </div>
    </div>
  )
}

export default Todotask