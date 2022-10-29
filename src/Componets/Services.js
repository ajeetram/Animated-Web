import React from 'react'
import Card from './Card'
import data from './CardData'

function Services() {
  return (
    <>
      <div className='header-servce text-center text-white'>
        <h1>Our Services</h1>
    </div>
    <div className='row my-5'>
      <div className='col-10 mx-auto '>

    <div className='row gy-4' >
      {
        data.map((val,ind)=>
        {
          return <Card key = {ind} imgsrc={val.imgSrc} title = {val.CardTitle} text = {val.CardText}></Card>
        })
      }
    </div>
    </div>
    </div>
    </>
  )
}

export default Services