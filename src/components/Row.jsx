import React from 'react'

import '../styles/ProductRow.css'

function Row(props) {
    const name = props.name
    const status = props.status
    const id = props.id
    
    return (
        <div className='product-row'>
            <span >{id}</span>
            <span>{name}</span>
            <span>{`${status}`} </span>
        </div>
    )
}

export { Row }