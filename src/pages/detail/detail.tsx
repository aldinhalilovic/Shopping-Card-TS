import { Carousel } from '@mantine/carousel';
import { Image, Collapse, Rating } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../store/dataslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Detail = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const product = useAppSelector((state) => state.products.product);
   const [opened, setOpened] = useState<boolean>(false);

   useEffect(() => {
      dispatch(fetchSingleProduct(id));
   }, []);

   const tabel = {
      width: '90%',
      height: '5%',
      borderBottom: '2px solid #075f7a ',
      padding: '10px 5px',
      fontSize: '19px',
      fontFamily: 'sans-serif',
      fontWeight: '700',
      color: 'black',
   };

   return (
      <div
         style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
         }}
      >
         <div
            style={{
               width: '50%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <div
               style={{
                  height: '70%',
                  width: '40%',
                  overflow: 'hidden',
                  border: '1px solid transparent',
                  borderRadius: '10px',
               }}
            >
               <Carousel
                  sx={{
                     maxWidth: 320,
                  }}
                  styles={{
                     indicator: {
                        height: '10px',
                        width: '10px',
                        borderRadius: '50%',
                     },
                  }}
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
         <div
            style={{
               width: '40%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: 'whitesmoke',
               borderRadius: '15px',
            }}
         >
            <div style={tabel}>ID: {product.id}</div>
            <div style={tabel}>Category: {product.category}</div>
            <div style={tabel}>Brand: {product.brand}</div>
            <div style={tabel}>Current Price: {product.price}€</div>
            <div style={tabel}>Discount: {product.discountPercentage}%</div>
            <div style={tabel}>
               Rating: {product.rating}%
               <Rating fractions={Number(product.rating.toFixed())} defaultValue={product.rating} readOnly />
            </div>
            <div style={tabel}>Products left: {product.stock}</div>
            <div style={tabel}>
               <button onClick={() => setOpened((prev) => !prev)}>Description</button>
               <Collapse in={opened}>{product.description}</Collapse>
            </div>
         </div>
      </div>
   );
};

export default Detail;
