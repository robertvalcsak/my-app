import React from 'react'

function Beer({beerData}) {
    console.log({beerData})
  return (
    <div>
      <h1>{beerData.title}</h1>
      <p>{beerData.sub}</p>
    </div>
  )
}

export default Beer;
