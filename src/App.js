import { useState } from 'react'
import './App.css';
import Header from "./Header.js";
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems]= useState(JSON.parse(
    localStorage.getItem("todo-list")
  )    
)

const addList = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addItem = {id, checked: false, item }
  const addItemInList = [...items, addItem]
  setItems(addItemInList)
  localStorage.setItem("todo-list", JSON.stringify(addItemInList))
}

const handleCheck =(id) => {
   const listItems = items.map( (item)=> 
       item.id === id ? {...item, checked : !item.checked } : item  )
       setItems(listItems)
       localStorage.setItem("todo-list", JSON.stringify(listItems))
}

const handleClick = (id) => {
    const listDel = items.filter((item) => item.id !==id);
    setItems(listDel)

     localStorage.setItem("todo-list", JSON.stringify(listDel))
} 

 const [newItem,setNewItem ] = useState("")
  
const handleSubmit = (e) => {
  e.preventDefault()
  if(!newItem) return;
 
  addList(newItem)
  setNewItem( "")
}
 
const [searchList, setSearchList] = useState("")

  return (
   <>
   <Header/>
   <AddItem
     newItem = {newItem}
     setNewItem = {setNewItem}
     handleSubmit= {handleSubmit}
     addList = {addList}
   />

   <SearchItem
      searchList = {searchList}
      setSearchList= {setSearchList}
   />
   <Content
      items = {items.filter(item => ((item.item).toLowerCase())
        .includes(searchList.toLowerCase())
      )}
      handleCheck = {handleCheck}
      handleClick = {handleClick}
   />
   <Footer 
    length = {items.length}
   />
   </>
  );
}

export default App;
