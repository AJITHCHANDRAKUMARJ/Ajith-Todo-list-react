import React from 'react'
import {FaPlus} from 'react-icons/fa';

const AddItem = ({handleSubmit, newItem, setNewItem}) => {
  return (
    <form className = "addForm"  onSubmit = {handleSubmit} >
        <label htmlFor="addItem">Add item</label>
        <input 
           id="addItem"
           type = "text"
           placeholder = "Add Item"
           autoFocus
           required
           value = {newItem}
           onChange = {(e) => setNewItem(e.target.value)}
        />

        <button>
        <FaPlus
          role = "button"
          aria-label = 'Add item'
          
        />
        </button>
    </form>
  )
}

export default AddItem