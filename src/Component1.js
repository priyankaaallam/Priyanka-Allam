import {createContext, useState,useContext} from 'react'
const UserContext = createContext();
function Component1() {
    const [user]=useState("react");

  return (
    <div>
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 user={user}/>
        </UserContext.Provider>
      
    </div>
  );
}
function Component2(){
    return(
        <div>
        <h2> Component2 </h2>
        <Component3/>
        </div>
    );
}
function Component3(){
    return (
        <div>
            <h2>Component3</h2>
            <Component4/>
        </div>
    );
}
function Component4(){
    return(
        <div>
        <h2>Component4</h2>
        <Component5/>
    </div>
    );
}
function Component5(){
    const user=useContext(UserContext);
    return(
        <h1>{`Hello ${user} again !`}</h1> 
    );
}
export default Component1
