import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {readCard} from '../utils/api/index';
import CardForm from './CardForm';

function EditCard({deck, deckUrl}){
    const {cardId} = useParams();
    const [card, setCard] =useState({});
    const {name} = deck;
    
    useEffect(()=>{
        const controller = new AbortController();

        async function loadCard () {
            const cardToEdit = await readCard(cardId, controller.signal);
            setCard(cardToEdit);
        }
        loadCard();
    }, [cardId]);

    if(card){
        return ( 
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" ><a href={deckUrl}>{name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <CardForm add={false} deckUrl={deckUrl} card={card} setCard={setCard}/>
            </>
        )
    }
    return <>Loading...</>

   
}

export default EditCard;