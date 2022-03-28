import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
    
    // const [images, setimages] = useState([]);

    // useEffect( () => {
    //     getGifs( categoria ).then( imgs => setimages( imgs ) )
    // }, [ categoria ])


    const {  data, loading } = useFetchGifs( categoria );
    

    return (
        <>
        <h3>{categoria}</h3>

        { loading ? <p>Loading...</p> : null}

        <div className='card-grid'>
            
            {
                
                data.map(img => (
                    <GifGridItem 
                        { ...img }
                        key={ img.id }
                    />
                ))
            }

        </div>

        </>
        
    )
}
