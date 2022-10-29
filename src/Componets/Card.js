import React from 'react'
import "./Card.css";

function Card(props) {
  return (
   
    <div class="card mx-4 my-3" >
  <img class="card-img-top" src={props.imgsrc} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">Let's Start</a>
  </div>
  </div>
  )
}


export default Card;