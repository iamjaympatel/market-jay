import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
  const {product}=props
  
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={{"height":"11rem"}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews}`}
          />
        </Card.Text>
         <Col>
           <Row>
           <Card.Text as='div'>{product.category.name}</Card.Text>
           </Row>
         <Row>
         <Card.Text as='div'>price:${product.price}</Card.Text>
        <Card.Text as='div' style={{"marginLeft":"0.5rem"}}> Unit:
        <strong>{product.unit}</strong></Card.Text>
        </Row>
         </Col>
        

        <Card.Text as='div'>Stoke:
        <strong>{product.countInStock}</strong></Card.Text>
        <Card.Text as='div'>Location:
        <strong>{product.userLocation}</strong></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
