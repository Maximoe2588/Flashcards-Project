import React from "react";
import CardView from "./CardView";
import { deleteDeck } from "../utils/api/index";
import { useRouteMatch } from "react-router-dom";

//Component will render the deck and edit, study, add, or delete cards

function ShowDeck({deck}){
  const { url } = useRouteMatch();
  
  const handleDelete = async (deckId) => {
    if(windows.confirm("Delete this deck?\n You will not be able to recover it.")){
      await deleteDeck(deck.id);
    }
  }
   
    return (
       <div className="container">
         <div className="card">
           <div className="card-body">
             <h4 className="card-title">{deck.name}</h4>
               <p className="card-description">{deck.description}</p>
               <a className="btn" href={`${url}/edit`}>Edit</a>
               <a className="btn" href={`${url}/study`}>Study</a>
               <a className="btn" href={`${url}/cards/new`}>+ Add Cards</a>
               <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        <h3>Cards</h3>
        {deck.cards.map((card) => <CardView key={card.id} card={card} url={url}/>)};
       </div>
  );
 
}

export default ShowDeck;