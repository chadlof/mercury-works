import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
 
export default function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://official-joke-api.appspot.com/random_joke').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
console.log({data})
  return (
    <div>
      <h1>{data.setup}</h1>
      <p>{data.punchline}</p>

    </div>
  )
}