import React from 'react';
import { client, urlFor } from '../../lib/client';
const ProductDetails = ({productData,productsData}) => {
    const {name,price,details,image} = productData;
    return (
        <div className="mt-32 text-black">
            <div>
                <div>
                    <div>
                        <img src={urlFor(image && image[0])} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async ({params:{slug}}) => {
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productData = await client.fetch(productQuery);
    const productsQuery = `*[_type == "product"]`;
    const productsData = await client.fetch(productsQuery);

    console.log(productData)
  
    return {
      props: {
        productData,
        productsData
      }
    }
  }

export default ProductDetails;