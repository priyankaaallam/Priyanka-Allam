import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand :"Ford",
            color :"Black",
            year :1980

        }
    }
    render(){
        return(
            <div>
            <h1>My {this.state.brand}</h1>
            <p> It is {this.state.color}</p>
            </div>
        );
    }
}
export default Car;