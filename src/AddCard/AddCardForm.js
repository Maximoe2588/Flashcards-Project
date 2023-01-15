import React, { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
import { readDeck, createCard } from "../utils/api";


//Componenet will be the form for adding a new card to deck that already exists

function AddCardForm({deck, error, setError}) {
  const [currentDeck, setCurrentDeck] = useState({...deck});
  const initialFormState = { front: "", back: "", deckId: deck.id};
  const [formData, setFormData] = useState({...initialFormState});

  
  /*useEffect(() =>{
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setCurrentDeck).catch(setError);
        return () => abortController.abort();}, [deck.id]);*/

  const handleChange = ({target}) => {
  setFormData({...formData, [target.name]: target.value})
  };
  
  const handleSubmit = (event) => {
  event.preventDefault();
  createCard(deck.id, formData).then(setFormData({...initialFormState})).catch(setError);
  };

  return (
<div className="container">
  <h3> {deck.name}: Add Card></h3>
    <form onSubmit={handleSubmit}>
     <div className="form-group">
       <label htmlFor="front">Front</label>
         <textarea
           className="form-control"
           name="front"
           placeholder="Front side of card."
           rows={3}
           value={formData.front}
           onChange={handleChange}>
           </textarea>
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
           className="form-control"
           name="back"
           placeholder="Back side of card."
           rows={3}
           value={formData.back}
           onChange={handleChange}>
           </textarea>
      </div>
      <a href={`/decks/${deck.id}`} className="btn secondary">Done</a>
      <button className="btn primary" type="submit">Save</button>
    </form>
   </div>
  );
 }
  
export default AddCardForm;
  
///Review ClassNames
  
  
  
  
  
  
  
  
  
  
