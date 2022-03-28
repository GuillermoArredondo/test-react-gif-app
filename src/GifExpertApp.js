import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    const [categorias, setCategorias] = useState(['Perros']);

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategoria setCategorias={ setCategorias } ></AddCategoria>
        <hr></hr>

        <ol>
            {
                categorias.map( (categoria, i) =>
                  <GifGrid 
                    key={ categoria }
                    categoria={ categoria }
                  /> )
            }
        </ol>
      </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp