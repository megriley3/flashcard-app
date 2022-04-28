import React, {useState, useEffect} from 'react';
import {useRouteMatch, Switch, Route, useParams} from 'react-router-dom';
import ViewDeck from './ViewDeck';
import EditDeck from './EditDeck';
import StudyDeck from './StudyDeck';
import AddCard from '../Cards/AddCard';
import EditCard from '../Cards/EditCard';
import {readDeck} from '../utils/api/index';

function DeckById({decks, setDecks, deckDeleted, setDeckDeleted}){
    const {path} = useRouteMatch();
    const {url} = useRouteMatch();
    const {deckId} = useParams();
    const [deck, setDeck] = useState({});


    useEffect(() => {
        const controller = new AbortController();

        async function loadDeck (){
            const selectedDeck = await readDeck(deckId, controller.signal);
            setDeck(selectedDeck);
        };
        loadDeck();
        return () => controller.abort();
        
    }, [deck])

    return (
        <Switch>
            <Route exact path={path}>
                <ViewDeck deck={deck} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted}/>
            </Route>
            <Route path={`${path}/edit`}>
                <EditDeck deck={deck} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted} deckUrl={url} setDeck={setDeck}/>
            </Route>
            <Route path={`${path}/study`}>
                <StudyDeck deckUrl={url} deck={deck} deckId={deckId}/>
            </Route>
            <Route path={`${path}/cards/new`}>
                <AddCard deck={deck} deckUrl={url}/>
            </Route>
            <Route path={`${path}/cards/:cardId/edit`}>
                <EditCard deck={deck} deckUrl={url}/>
            </Route>
        </Switch>
    )
}

export default DeckById;

