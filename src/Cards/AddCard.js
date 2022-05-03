import React, {useState} from 'react';
import CardForm from './CardForm'

function AddCard({deck, deckUrl, card, setCard}){
    const {name} = deck;
    
    return (
        <>
        <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item" ><a href={deckUrl}>{name}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                    </ol>
        </nav>
        <h4>{name}: Add Card</h4>
        <CardForm add={true} deckId={deck.id} deckUrl={deckUrl} card={card} setCard={setCard}/>
        </>)
}

export default AddCard