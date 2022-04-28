import React from 'react';
import NotEnoughCards from './NotEnoughCards';
import StudyCard from './StudyCard'


function Cards({cards, deckUrl}){
    const cardNum = cards.length;
    if(cardNum<=2){
        return(
            <NotEnoughCards cardNum={cardNum} deckUrl={deckUrl}/>
        )
    } else  {
        return (<StudyCard cards={cards}/>)
    }
}

export default Cards;