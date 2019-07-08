import React from 'react'
import {ProductDetail} from '../components'

const Product = ({pageContext}) => (
    <ProductDetail
        {...pageContext}
    />
)

export default Product