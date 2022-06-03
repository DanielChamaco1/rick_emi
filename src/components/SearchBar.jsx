import React,{useContext} from 'react'
import '../styles/SearchBar.css'
import {SearchContext}from '../context/Serchconstext'


function SearchBar() {
    const {serchValue, setSerchValue}=useContext(SearchContext)
    const onSearchValueChange=(event)=>{
        setSerchValue(event.target.value)
    }
    console.log(serchValue)
    return (
        <div className='search-bar__container'>
            <input type="text" placeholder="Search..." onChange={onSearchValueChange} value={serchValue}/>
            <input id='show-products' type="checkbox" />
            <label htmlFor="show-products">Only show products in stock</label>
        </div>
    )
}

export { SearchBar }