import React, { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';
import { Message } from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { listTopProducts } from '../actions/productActions';
export const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
