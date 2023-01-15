import React from "react";
import { deleteCard } from "../utils/api";

//Component will render one card with edit and delete buttons

function CardView({card, url}){
  const handleCardDelete = async(cardId) => {
    if(window.confirm("Delete this card?\nYou will not be ablt to recover it.")){
      await deleteCard(card.id);
    }
  };
  
  return(
  <div className="card">
     <div className="card-body">
       <div className="card-text">
         <p>{card.front}</p>
         <p>{card.back}</p>
       </div>
     </div>
       <div className="card-footer">
         <a href={`${url}/cards/${card.id}/.edit`} className="btn secondary">Edit</a>
         <button className="btn" onClick={handleCardDelete}>Delete</button>
       </div>
     </div>
   );
 }
export default CardView;