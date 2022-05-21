import React from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import RecommendedProduct from '../../components/recommendedProduct';
import { useStateContext } from '../../context/StateContext';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({productData,productsData}) => {
    const {name,price,details,image} = productData;
    const [quantity, setQuantity] = React.useState(1);
    const [index, setIndex] = React.useState(0);
    const {decQty, incQty,qty,onAdd,setShowCart} = useStateContext();

    const handleBuyNow = async()=>{

        onAdd(productData,qty);
        setShowCart(true);
    
    }
  
  
    return (
        <div className="mt-40 text-black h-full">
            <div className="flex flex-col md:flex-row gap-10 m-10 mt-16 text-[#1F3A33]">
                <div className="">
                    <div className='rounded-2xl bg-[#F0EBE0] w-[300px] h-[300px] md:w-[400px] md:h-[400px]  cursor-pointer transition hover:bg-[#f02d34]'>
                        <img src={urlFor(image && image[index])} alt=""  />
                    </div>
                    <div className="flex gap-3 mt-4">
                       {image?.map((img,i) => (
                            <img src={urlFor(img)}   key={i} className={`${i==index ? " bg-red-600" :"bg-[#D4E9E2]"} rounded-lg  h-[70px] w-[70px] cursor-pointer hover:bg-red-600` } onMouseEnter={()=>setIndex(i)}/>
                       ))}
                    </div>
                </div>
                <div className="">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <div className='mt-2 flex gap-2 items-center text-[#f02d34] '>
                        <div className="flex ">
                            <AiFillStar className="text-2xl cursor-pointer" />
                            <AiFillStar className="text-2xl cursor-pointer" />
                            <AiFillStar className="text-2xl cursor-pointer" />
                            <AiFillStar className="text-2xl cursor-pointer" />
                            <AiOutlineStar className="text-2xl cursor-pointer" />
                        </div>
                        <p className='text-black'>(20)</p>
                    </div>
                    <h4 className="text-lg font-bold text-[#1F3A33] my-3">Details:</h4>
                    <p>{details}</p>
                    <p className="text-xl font-extrabold text-[#1F3A33] my-3">${price} </p>
                    <div className="flex items-center gap-2">
                        <h3 className='font-bold '>Quantity:</h3>
                        <p className="border-2 inline-block px-1">
                           <span className='inline-block  px-2  text-2xl cursor-pointer text-[#f02d34]' onClick={decQty}><AiOutlineMinus className="pt-2"/></span> 
                           <span className="text-xl border-x-2 px-3  inline-block">{qty}</span>
                           <span className='inline-block px-2   text-2xl cursor-pointer text-green-600' onClick={incQty}><AiOutlinePlus className="pt-2"/></span> 
                        </p>
                    </div>
                    <div className='mt-5 '>
                        <button type="button" className='px-9 py-1 border-2 border-red-600 text-red-500 font-bold my-3  hover:text-white hover:bg-red-600 transition mr-6' onClick={()=>onAdd(productData,qty)}>Add to Cart</button>
                        <button  className='px-10 py-1 border-2 bg-red-600 border-red-600 text-white  hover:bg-red-400 font-bold' onClick={handleBuyNow}>BUY NOW</button>
                    </div>
                </div>
            </div>
            
            <div className="py-10 text-center">
                <h1 className='text-4xl font-extrabold lg:font-black text-center text-[#1e3932]'>You May Be Like</h1>
            </div>
            <div className='mt-5'>
            <RecommendedProduct productsData={productsData}/>
            </div>
            {/* <div>
                <BestProducts />
            </div> */}
            
        </div>
    );
};
export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }`
    const products = await client.fetch(query);

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current
        }
    }))
    return{
        paths,
        fallback:'blocking'
    }
}

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