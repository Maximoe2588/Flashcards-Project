import React from "react";

//Component will display the Navigation Links to Home and Create Deck

function CreateDeckNavig(){
  return (
        <div className="container">
         <nav>
           <ol>
             <li className="breadcrumb primary"><a href="/">Home</a></li>
             <li className="breadcrumb secondary">Create Deck</li>
           </ol>
         </nav>
       </div>
 );
}

export default CreateDeckNavig;