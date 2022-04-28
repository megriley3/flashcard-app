import React from 'react';

function NotEnoughCards({cardNum, deckUrl}){

    return (
        <>
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study. There are {`${cardNum}`} cards in this deck.</p>
        <a href={`${deckUrl}/cards/new`} className="btn btn-primary btn-lg">+Add Cards</a>
        </>
    )
}

export default NotEnoughCards