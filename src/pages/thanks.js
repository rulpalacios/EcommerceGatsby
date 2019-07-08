import React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components'
import {Button, Purchase} from '../styles/components'

const Thanks = () => (
    <>
        <SEO title='Compra exitosa'/>
        <Purchase>
            <h2>Compra Exitosa</h2>
            <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
            <p>¡Te esperamos de vuelta, no pares de aprender!</p>
            <span role="img" aria-label="emoji">❤️</span>
            <Link to='/'>
                <Button>Volver al Catalogo</Button>
            </Link>
        </Purchase>
    </>
)

export default Thanks