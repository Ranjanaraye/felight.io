import React from 'react'
import '../categoryitem/CategoryItem.scss'

const CategoryItem = ({id,title,imageUrl}) => {
    return (
        <div style={{backgroundImage:`url(${imageUrl})`}} className='container-item'>
            <div className='container-holder'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Know More</span>
            </div>
        </div>
    )
}

export default CategoryItem;