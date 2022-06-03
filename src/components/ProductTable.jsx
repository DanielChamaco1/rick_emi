import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
//import {electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'
import { Category } from './Category'


function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])
    const [dataepisodi, setDataepisodi] = useState([])
    const fetchepisodi = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        response.json().then(response => setDataepisodi(response.results))
    }
    useEffect(() => {
        fetchepisodi()
    }, [])
    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <Category title='Episode' list={dataepisodi} />
            </div>
        </div>
    )
}

export { ProductTable }