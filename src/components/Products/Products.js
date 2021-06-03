import React from 'react'
import {ProductsContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton} from './ProductsElements';

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((item, index)=> {
                    const {img, alt, name, desc, price, button} = item;
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={img} alt={alt}/>
                            <ProductInfo>
                                <ProductTitle>{name}</ProductTitle>
                                <ProductDesc>{desc}</ProductDesc>
                                <ProductPrice>{price}</ProductPrice>
                                <ProductButton>{button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
}

export default Products
