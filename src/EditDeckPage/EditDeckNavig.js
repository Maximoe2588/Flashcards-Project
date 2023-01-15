import React from "react";
//responsible for returning Edit Deck Navigation
function EditDeckNavig({deck}) {
    return (
        <div className="container">
            <nav>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li>Edit Deck</li>
                </ol>
            </nav>
        </div>
    );
}
export default EditDeckNavig;