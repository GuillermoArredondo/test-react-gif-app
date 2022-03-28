import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    console.log(title.length);

    if (title.length > 20) {
        title = title.slice(0,19) + '...';
    }

    return (
        <div className='card animate__animated animate__fadeIn'> 
            <img src={ url }></img>
            <p> {title} </p>
        </div>
    )
}
