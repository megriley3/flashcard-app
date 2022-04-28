import React, {useEffect, useState} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import {readDeck} from '../utils/api/index';
import Cards from '../Cards/index';

function StudyDeck({deckUrl, deckId, deck}){

    const {url} = useRouteMatch();
    //const {deckId} = useParams();
    /*const [name, setName] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadDeck (){
            const selectedDeck = await readDeck(deckId, controller.signal);
             setName(selectedDeck.name)
             setCards(selectedDeck.cards)
            
        };
        loadDeck();
        return () => controller.abort();
        
    }, [])*/

    const cards = deck.cards;
    const name = deck.name;

    if(cards){
        return (
            <>
              <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a href={deckUrl}>{name}</a></li>
                        <li className="breadcrumb-item"><a href={url}>Study</a></li>
                    </ol>
                </nav>
                <h1>Study: {name}</h1>
                <Cards cards={cards} deckUrl={deckUrl}/>
            </>
            
        ) 
    }
    return <p>Loading...</p>;

    
}

export default StudyDeck;