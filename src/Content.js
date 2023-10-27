import React from 'react'

import ListItems from './ListItems';
const Content = ({items, handleCheck, handleClick}) => {
  return (
    <main>
        {items.length ? (
        <ListItems
         items= {items}
         handleCheck = {handleCheck}
         handleClick = {handleClick}      
        />
        ): 
            <p>Your list is empty</p>
        
            }
    </main>

    
  )
}



export default Content