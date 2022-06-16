import React from "react";
function Car(props){
    return(
        <li>{props.brand}</li>
    )
}
function Garage(){
    const cars=['Ford','Audi','BMW'];
    return(
        <div>
        <h1> Garage</h1>
        <ul>
        {cars.map((car)=><Car brand={car}/>)}
            
                    </ul>
        </div>
    )
}
export default Garage