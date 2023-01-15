import { readDeck } from "../utils/api/index";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudyPageNavig from "./StudyPageNavig";
import CardDisplay from "./CardDisplay";
import ErrorMessage from "../ErrorMessage";

export const Study = () => {
    const [deck, setDeck] = useState(null);
    const { deckId } = useParams();
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
            <div>
            <StudyPageNavig deck={deck} />
            <div className="container">
                <h1>Study: {deck.name}</h1>
            </div>
            <CardDisplay deck={deck}/>
            </div>
        );
       
    }

        
  
}
export default Study;