import React from 'react'

// function Beer({beerData}) {
    function Beer(props) {
        console.log({props})
        
        // const beerData = props.beerData
        // const {beerData} = props
        const {title, sub} = props.beerData

  return (
    <div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  )
}

export default Beer;
