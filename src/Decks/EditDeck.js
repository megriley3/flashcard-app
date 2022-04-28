import React from 'react';
import DeckForm from './DeckForm'

function EditDeck({deck, deckUrl, setDeck}){
    const {name} = deck;

   if(name){
    return (
        <>
         <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href={deckUrl}>{name}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                        </ol>
            </nav>
            <div className="container">
                <DeckForm create={false} deck={deck}/>
            </div>

        </>)
   } else{
       return <p>Loading...</p>
   }
    
}

export default EditDeck