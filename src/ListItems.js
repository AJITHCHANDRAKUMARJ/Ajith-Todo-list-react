import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListItems = ({items,handleCheck,handleClick}) => {
  return (
    <ul>
            {items.map((item) =>(
                <li className= "item" key = {item.id}>
                    <input
                       type= "checkbox"
                       onChange= {() => handleCheck(item.id)}
                       checked =  {item.checked}                 
                    />
                    <label
                       style={(item.checked)? {textDecoration:"line-through"}: null}
                       onDoubleClick= {() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaRegTrashAlt
                           role ="button"
                          tabIndex = "0"
                          onClick = {() => handleClick(item.id)}
                          aria-label = {`Delete ${item.item}`}
                    />         
               </li>          
            ))}
        </ul>
  )
}

export default ListItems