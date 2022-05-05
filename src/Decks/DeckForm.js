import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createDeck, updateDeck} from '../utils/api/index';
import './DeckForm.css'


function DeckForm ({create, deck}){
    const history = useHistory();
    const [deckToEdit, setDeckToEdit] = useState(deck);    

    const handleChange = ({target}) => {
        setDeckToEdit({
            ...deckToEdit,
            [target.name]: target.value});
    }

    const handleCancel = (event) => {
        event.preventDefault();
        create ? history.push("/") : history.goBack();
    }
  const handleSubmit = (event) => {
        event.preventDefault();
        if(create && deck.name && deck.description){
            createDeck(deckToEdit)
                .then((result) => history.push(`/decks/${result.id}`))
            
        } else if (create){
            const result = window.confirm("Please enter valid data.")
            if(!result) history.goBack();
        } else{
            updateDeck(deckToEdit).then(()=> history.goBack())
        }
    }

   

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
            <label htmlFor="name" >
                Name
                <input type="text" id="name" name="name" placeholder="Deck Name" onChange={handleChange} value={deckToEdit.name}/>
            </label>
            </div>
            <div className="row">
            <label htmlFor="description" >
                Description
                <textarea id="description" name="description" placeholder="Brief description of the deck" onChange={handleChange} value={deckToEdit.description}/>
            </label>
            </div>
            <div className="row">
            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary" style={{marginLeft: 10}}>Submit</button>
            </div>
        </form>
    )
}

export default DeckForm;