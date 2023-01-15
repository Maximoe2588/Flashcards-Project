import React, { useState, useEffect } from 'react';
import EditCardForm from './EditCardForm';
import EditCardNavig from './EditCardNavig';
import ErrorMessage from '../ErrorMessage';
import { useParams } from "react-router-dom";
import { readCard, readDeck } from '../utils/api';

function EditCard(){
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState(null);
  const { deckId, cardId } = useParams ();
  const [ error, setError ] = useState(undefined);
  
  useEffect(() =>{
        const abortController = new AbortController();
          readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
          readCard(cardId, abortController.signal).then(setCard).catch(setError);
          return () => abortController.abort();
            }, []);
   
  if (error) {
  return <ErrorMessage error={error} />
  }

  if(!deck || !card) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <EditCardNavig card={card} deck={deck} deckId={deckId} />
                <EditCardForm card={card} setCard={setCard} deckId={deckId}/>
            </div>
    );
  }
}


export default EditCard;