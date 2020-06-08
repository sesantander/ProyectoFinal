import React from 'react';

const Zapato =(props)=>{
    console.log('EL ID ',props._id)
    return(
        <div className="tc bnegro dib pa2 ma1 grow coso" >
            <a href = {"http://localhost:3000/product/"+props._id}>
            <img alt="zapato" src={"http://localhost:5000"+props.image}></img>
            
        <div>
            <p className="tp" >{props.name}</p>
            <p className ="tc tp2">${props.price}</p>
        </div>
        </div>
    )
}
export default Zapato