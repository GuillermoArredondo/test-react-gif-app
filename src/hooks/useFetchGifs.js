import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
      
        getGifs( categoria ).then( imgs =>{
            
            setTimeout(() => {

                setState({
                    data: imgs,
                    loading: false
                })

                
            }, 500);


        } )

    }, [ categoria ])

    return state; 

}