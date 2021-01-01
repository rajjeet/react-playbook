import React, { useState, useEffect } from 'react';

export const DataFetchingEffectHook = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/comments').then(response => response.json())
      .then(json => {
        setComments(json)
        setError(false);
      })
      .catch(() => {
        setError(true);
      }).finally(() => {
        setIsLoading(false);
    })
  }, [])

  return (
    <>
      <h3>Data Fetching</h3>
      {error && <b id={"error"}>Error!</b>}
      {isLoading && <div id={"loading"}>Loading...</div>}
      {
        comments.length > 0 && (
          <div>
            <h5>Comments:</h5>
            {comments.map(c => <div key={c.id} id={c.id}>{c.text}</div>)}
          </div>
        )
      }
    </>
  );
};