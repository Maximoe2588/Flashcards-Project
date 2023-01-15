import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import ShowDeck from "./ShowDeck";
import DeckPageNavig from "./DeckPageNavig";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";

//Component will render the Deck Page utilizing the CardView, DeckPageNavig, and ShowDeck components

function DeckPageHome() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState(undefined);
  
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);
            
     if(error) {
      <ErrorMessage error={error} />
    }
  
    if(!deck) {
      return <h2>Loading...</h2>;
     } else {
       return (
         <div className="container">
           <DeckPageNavig deck={deck} />
           <ShowDeck deck={deck} />
         </div>
      );
   }
}

export default DeckPageHome;