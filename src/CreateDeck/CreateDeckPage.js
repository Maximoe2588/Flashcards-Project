import CreateDeckNavig from"./CreateDeckNavig";
import CreateDeckForm from "./CreateDeckForm";
import React from "react";

//Component will render the Create Deck Page utilizing the Navig/Form components

function CreateDeckPage(){
  return(
  <div>
      <CreateDeckNavig/>
      <CreateDeckForm/>
  </div>
  );
}
export default CreateDeckPage;