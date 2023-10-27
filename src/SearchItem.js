import React from 'react'

const SearchItem = ({searchList, setSearchList}) => {
  return (
    <form  className="searchForm" onSubmit = {(e) => {e.preventDefault()}}>

        <label htmlFor="search">Search</label>
        <input
             id="search"
             type = "text"
             placeholder = "Search Item"
             value = {searchList}
             onChange = {(e) => {setSearchList(e.target.value)}}
        />
    </form>
  )
}

export default SearchItem