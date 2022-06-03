import React ,{ createContext,useMemo,useState } from "react";
import {electronicsList,sportsList}from '../assets/filteredByCategories'
const SearchContext=createContext()

function SearchProvider(props)
{

    const [SearchValue,setSearchValue]= useState('')
    const filterProducts=useMemo(()=>{
        electronicsList.filter((item)=>{
            return item.name.toLowerCase().includes(SearchValue.toLowerCase())
        })
    },[SearchValue])
    return(
        <SearchContext.Provider value={{
            SearchValue,filterProducts}}>
            {props.children}
        </SearchContext.Provider>
    )
}
export {SearchProvider,SearchContext}

