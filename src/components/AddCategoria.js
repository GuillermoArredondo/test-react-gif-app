import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategoria = ( { setCategorias } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0) {
            setCategorias( categorias => [inputValue, ... categorias] );
        }

        
    }

  return (
      <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            placeholder='Buscar'
            value={ inputValue }
            onChange={ handleInputChange }
        />
      </form>
  )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
