import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {createCard, updateCard} from '../utils/api/index';


function CardForm({add, deckId, deckUrl, card={front: "", back: ""}, setCard}) {
    const history = useHistory();

    const handleChange = ({target}) => {
        setCard({
            ...card,
            [target.name]: target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(add && card.front && card.back){
            createCard(deckId, card)
            setCard({front:"", back: ""})
        } else if (add){
            const result = window.confirm("Please enter valid data.");
            if(!result) history.goBack();
        } else {
           updateCard(card)
            .then((newCard) => setCard(newCard))
            .then(() => history.push(deckUrl))
        }
        
    }
    if(add){
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                <label htmlFor="front">
                    Front
                    <textarea name="front" id="front" placeholder="Front side of card" onChange={handleChange} value={card.front}/>
                </label>
                </div>
                <div className="row">
                    <label htmlFor="back">
                        Back
                        <textarea name="back" id="back" placeholder="Back side of card" onChange={handleChange} value={card.back}/>
                    </label>
                </div>
                <div className="row">
                    <Link to={deckUrl} className="btn btn-secondary">Done</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
    
            </form>
        )
    } else {
        return (
            <form onSubmit={handleSubmit}>
            <div className="row">
            <label htmlFor="front">
                Front
                <textarea name="front" id="front" placeholder="Front of card" onChange={handleChange} value={card.front}/>
            </label>
            </div>
            <div className="row">
                <label htmlFor="back">
                    Back
                    <textarea name="back" id="back" placeholder="Back of card" onChange={handleChange} value={card.back}/>
                </label>
            </div>
            <div className="row">
                <Link to={deckUrl} className="btn btn-secondary">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>
        )
    }

   
}

export default CardForm