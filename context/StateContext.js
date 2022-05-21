import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';


const Context = createContext();



export const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalQuantity,setTotalQuantities] = useState(0);
    const [qty,setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
    
        toast.success(`${qty} ${product.name} added to the cart.`);
      } 

      const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

      const toggleCartItemQuantity = (productId, quantity) => {

        const newCartItems = cartItems.filter((item) => item._id !== productId);
          foundProduct = cartItems.find((item) => item._id === productId);
          index = cartItems.indexOf((product)=> product._id === productId);

          if(quantity === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
          } else if(quantity === 'dec') {
            if(foundProduct.quantity> 1){
              setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
              setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
              setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
          }
      }


    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) =>{ 
            if(prevQty - 1 < 1)  return 1
            return prevQty - 1
        });
    }
    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            qty,
            incQty,
            decQty,
            onAdd,
            setShowCart,
            totalQuantity,
            toggleCartItemQuantity,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities 
          
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => React.useContext(Context);