import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  const renderContent = () => {
    if(data.length > 0) {
      return (
          <ul>
            {data.map(item => {
              const {id, login, avatar_url, html_url} = item;
              return (
                  <li key={id}>
                    <img src={avatar_url} alt={login}/>
                    <div>
                      <h4>{login}</h4>
                      <a href={html_url}>Profile</a>
                    </div>
                  </li>
              )
            })}
          </ul>
      )
    } else {
      return <h4>No data available due to exceeded rate limit </h4>
    }
  }


  return (
      <>
        <h3> GitHub Users</h3>
        {renderContent()}
      </>
  )
};

export default UseEffectFetchData;
