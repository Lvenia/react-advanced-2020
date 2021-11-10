import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({name, image, price}) => {
  // if default image is not provided in defaultProps property of component:
  // assign value of the url to a separate variable
  // use short-circuit evaluation in JSX
  // const imageUrl = image && image.url;
  return (
      <article className='product'>
        {/*<img src={imageUrl || defaultImage } alt={name}/>*/}
          <img src={image.url} alt={name}/>
        <h4>{name}</h4>
        <p>${price}</p>
      </article>
  );
};

Product.propsType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
    price: " not provided",
    image: {
        url: defaultImage,
    }
}
export default Product;
