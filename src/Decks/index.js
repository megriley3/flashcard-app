import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import CreateDeck from './CreateDeck';
import DeckById from './DeckById';

function Decks({decks, setDecks, deckDeleted, setDeckDeleted}){
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/new`}>
                <CreateDeck/>
            </Route>
            <Route path={`${path}/:deckId`}>
                <DeckById decks={decks} setDecks={setDecks} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted}/>
            </Route>
        </Switch>
    )
}

export default Decks