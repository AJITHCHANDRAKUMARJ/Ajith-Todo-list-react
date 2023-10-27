import React from 'react'
import ListItems from './ListItems'

const Footer = ({length}) => {

// const year = new Date()
// Copyright &copy; {year.getFullYear()}
  return (
    <footer> {length} List {length<=1 ? "item" : "items"}</footer>
  )
}

export default Footer