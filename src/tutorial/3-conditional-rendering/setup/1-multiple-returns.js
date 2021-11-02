import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/Lvenia';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
        .then(response => {
          if(response.status === 200) {
            return response.json();
          } else {
            setIsLoading(false);
            throw new Error(response.statusText)
          }
        })
        .then(user => {
          setUser(user);
          setIsLoading(false);
        })
        .catch(err => {
          setIsError(true);
          console.log(err);
        })
  }, []);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>Error</h2>
  }

  const {avatar_url, login, html_url} = user;
  return (
      <div className="card">
        <img src={avatar_url} alt={login}/>
        <div>
          <h3>{login}</h3>
          <a href={html_url}>Profile</a>
        </div>
      </div>
  )
};

export default MultipleReturns;
