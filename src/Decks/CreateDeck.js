import React, {useState} from 'react';
import DeckForm from './DeckForm';



function CreateDeck(){
    const [deck, setDeck] = useState({name: "", description: ""})
  
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <h1>Create Deck</h1>
        <DeckForm create={true} deck={deck} setDeck={setDeck}/>
        </>
    )
}


export default CreateDeck;