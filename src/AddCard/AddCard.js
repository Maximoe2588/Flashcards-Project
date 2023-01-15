import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import AddCardForm from "./AddCardForm";
import AddCardNavig from "./AddCardNavig";
import { readDeck } from "../utils/api/index"
import { useParams } from "react-router-dom";

//Component will add a new card to a deck that already exists

function AddCard(){
  const [deck, setDeck] = useState ({});
  const { deckId } = useParams ();
  const [error, setError] = useState(undefined);
  
  useEffect(() =>{
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();}, [deck.id]);
  
  if (error){
    return <ErrorMessage error={error} />
    }
  
  if(!deck.id){
    return <h2>Loading...</h2>;
  } else {
       return (
       <div>
          <AddCardNavig deck={deck}/>
          <AddCardForm deck={deck} error={error} setError={setError} />
       </div>
       );
     }
  }  

export default AddCard;
  
  
  
  
