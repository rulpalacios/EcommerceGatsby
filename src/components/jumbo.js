import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

const Jumbo = ({description}) => (
    <StyledJumbo>
        <div>
            <h2>{description}</h2>
            <small>Piezas elegantes para los mejores estudiantes.</small>
        </div>
        <Image name='icon' />
    </StyledJumbo>
)

export default Jumbo