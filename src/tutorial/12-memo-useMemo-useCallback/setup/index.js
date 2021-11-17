import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/javascript-store-products';

const expensiveCalculation = (data) => {
   console.count("Expensive Calc")
   return (
       data.reduce((acc, cur) => {
           const price = cur.fields.price;
            if(price > acc) {
                acc = price;
            }
            return acc;
       }, 0)
   )
}

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  useEffect(() => {
      console.count("Index element")
  });
  const addToCart = useCallback(() => {
      setCart(cart + 1)
  }, [cart]);

  const mostExpensiveItem = useMemo(() => expensiveCalculation(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2>Cart: {cart}</h2>
      <p>Most expensive item ${mostExpensiveItem/100}</p>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.count("List element")
    })
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
            })}
        </section>
    )
})

const SingleProduct = ({ fields, addToCart }) => {
 useEffect(() => {
    console.count("Article element")
 })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  )
}
export default Index
