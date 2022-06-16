import React from 'react'

 function Car(props) {
  return (
    <div>
      <h1>{props.brand} </h1>   
    </div>
  );
  }
    function Cars() {
     const carname='Ford';
    return(
      <div>
          <h1>Cars</h1>
        <Car brand={carname}/>
      </div>
    );
  }
  export default Cars
  

