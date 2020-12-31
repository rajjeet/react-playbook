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
      <h4>Data Fetching</h4>
      {error && <b id={"error"}>Error!</b>}
      {isLoading && <div>Loading...</div>}
      {
        comments.length > 0 && (
          <div>
            <h3>Comments:</h3>
            {comments.map(c => <div key={c.id}>{c.text}</div>)}
          </div>
        )
      }
    </>
  );
};