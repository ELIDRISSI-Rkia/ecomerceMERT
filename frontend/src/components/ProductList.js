import React from 'react'
import products from '../products';
import {Row, Col} from 'react-bootstrap';
import Product from './Product';



const ProductList = () => {
  return (
    <>
    
    <Row>
    {products.map((product) => ( 
    <Col >
         <Product p={product} /> 
         </Col> ))}

    </Row>
    </>
  )
}

export default ProductList