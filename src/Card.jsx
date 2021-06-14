import React from 'react';
import './Card.css';

const Card = (props)=>
{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto ">

                    <div class="card ">
                        <img src={props.imgsrc} class="card-img-top " style={{height:'200px'}} alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{props.cardtitle}</h5>
                        <p class="card-text">{props.cardtext}</p>
                        <a href={props.cardlink} class="btn btn-primary">Watch</a>
                        </div>
                    </div>

            </div>
        </>
    );
}

export default Card;