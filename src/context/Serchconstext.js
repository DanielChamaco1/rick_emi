import React ,{ createContext,useState } from "react";

const SearchContext=createContext()

function SearchProvide(props)
{

    const [SearchValue,setSearchValue]= useState('')
    const filterProducts=()=>{}
    return(
        <SearchContext.Provider value={SearchValue}>
            {props.children}
        </SearchContext.Provider>
    )
}
export {SearchContext,SearchProvide}

