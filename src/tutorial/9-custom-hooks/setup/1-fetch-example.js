import React from 'react';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const {loading, result} = useFetch(url);
  console.log(result);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
};

export default Example;
