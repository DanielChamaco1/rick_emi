import React,{useState} from 'react'
import '../styles/SearchBar.css'


function SearchBar() {
    const [serchValue, setSerchValue]=useState('')
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