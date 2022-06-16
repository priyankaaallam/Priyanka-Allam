import React from "react";
class Black extends React.Component{
    render(){
        return <h2> Hai i am black</h2>
    }
}
class Color extends React.Component{
    render(){
        return(
        <div>
            <h1> Colors</h1>
            <Black/>
        </div>
        );
    }
}
export default Color