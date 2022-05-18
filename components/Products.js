import React from 'react';
import Product from './Product';

const Products = ({productsData}) => {

    return (
        <div className="flex items-center justify-center  mt-10 flex-wrap w-full gap-5 py-20 mb-5 ">
            {productsData?.map(product => (
                <Product  key={product._id} product={product}/>
            ))}
        </div>
    );
};

export default Products;