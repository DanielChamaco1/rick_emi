import React from 'react'
import { Row } from './Row.jsx'
import '../styles/CategoryProductRow.css'

function Category(props) {

    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((episode) =>
                    <Row
                        name={episode.name}
                        status={episode.episode}
                        key={episode.name}
                        id={episode.id}
                    />)}

            </div>
        </div>
    )
}

export { Category }