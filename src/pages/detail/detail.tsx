import React, { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image, Collapse, Rating, Button } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './detail.css';

const Detail = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const product = useAppSelector((state) => state.products.product);
   const [opened, setOpened] = useState<boolean>(false);

   useEffect(() => {
      dispatch(fetchSingleProduct(id));
   }, []);

   const indicator = {
      indicator: {
         height: '10px',
         width: '10px',
         borderRadius: '50%',
      },
   };

   return (
      <div className="detail">
         <div className="detail-slick">
            <div className="detail-slick-carousel">
               <Carousel
                  sx={{
                     maxWidth: 320,
                  }}
                  styles={indicator}
                  mx="auto"
                  height={450}
                  dragFree
                  slideGap="md"
                  align="start"
                  loop
                  withIndicators
               >
                  {product.images.map((image) => (
                     <Carousel.Slide key={image}>
                        <Image src={image} height={450} style={{ objectFit: 'contain', width: '100%' }} />{' '}
                     </Carousel.Slide>
                  ))}
               </Carousel>
            </div>
         </div>
         <div className="detail-details">
            <div className="detail-details-title">ID: {product.id}</div>
            <div className="detail-details-title">Category: {product.category}</div>
            <div className="detail-details-title">Brand: {product.brand}</div>
            <div className="detail-details-title">Current Price: {product.price}€</div>
            <div className="detail-details-title">Discount: {product.discountPercentage}%</div>
            <div className="detail-details-title">
               Rating: {product.rating}%
               <Rating fractions={Number(product.rating.toFixed())} defaultValue={product.rating} readOnly />
            </div>
            <div className="detail-details-title">Products left: {product.stock}</div>
            <div className="detail-details-title">
               <Button onClick={() => setOpened((prev) => !prev)} variant={'filled'} color={'dark'}>
                  Description
               </Button>
               <Collapse in={opened}>
                  <p className="product-description">{product.description}</p>
               </Collapse>
            </div>
            <div className="button-cart">
               <Button>Add to cart</Button>
            </div>
         </div>
      </div>
   );
};

export default Detail;
