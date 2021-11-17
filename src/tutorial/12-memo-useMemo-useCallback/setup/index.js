import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
    useEffect(() => {
        console.count("Index element")
    })


  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  )
}

const BigList = React.memo(({ products }) => {
    useEffect(() => {
        console.count("List element")
    })
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product}></SingleProduct>
            })}
        </section>
    )
})

const SingleProduct = ({ fields }) => {
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
    </article>
  )
}
export default Index
