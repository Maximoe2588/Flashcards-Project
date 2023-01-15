import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { updateCard, createCard } from "../utils/api";
import { useHistory } from "react-router-dom";

//Component will render form for Editing a Card

function EditCardForm({card, setCard, deckId, error, setError}) {
  /*const [currentDeck, setCurrentDeck] = useState({...deck});
  const initialFormState = {front: "", back: "", deckId: deck.id};
  const [formData, setFormData] = useState({...initialFormState});*/
  

    const [formData, setFormData] = useState({...card});
    const history = useHistory();


  /*useEffect(() =>
        const abortController = new AbortController();
          readDeck(deck.id, abortController.signal).then(setCurrentDeck).catch(setError);
return () => abortController.abort();}, [deck.id];*/

const handleChange = ({target}) => {
  setFormData({...formData, [target.name]: target.value})
};
  
const handleSubmit = (event) => {
  event.preventDefault();
  createCard(deck.id, formData).then(setFormData({...initialFormState})).catch(setError);
};

  
return (
<div className="container">
  <h3> Edit Card></h3>
    <form onSubmit={handleSubmit}>
     <div>
       <label htmlFor="front">Front</label>
         <input
           className="form"
           name="front"
           placeholder="Front side of card."
           rows={3}
           value={formData.front}
           onChange={handleChange}>
           </input>
      </div>
      <div>
        <label htmlFor="back">Back</label>
        <textarea
           className="form"
           name="back"
           placeholder="Back side of card."
           rows={3}
           value={formData.back}
           onChange={handleChange}>
           </textarea>
      </div>
      <a href={`/decks/${deckId}`} className="btn secondary">Cancel</a>
      <button className="btn primary" type="submit">Submit</button>
    </form>
   </div>
  );
 }
  
export default EditCardForm;
  
  
  
  
  
  
  
  
  
  