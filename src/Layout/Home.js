import React, {useState, useEffect} from "react";
import {Link, Switch, Route} from 'react-router-dom';
import {listDecks} from "../utils/api/index";
import Decks from "../Decks";
import DeleteButton from './DeleteButton';
import NotFound from './NotFound';


function Home(){
    const [decks, setDecks] = useState([]);
    const [deckDeleted, setDeckDeleted] = useState(false); 

  useEffect(() => {
    const controller = new AbortController();
    
    async function loadDecks() {
      const deckList = await listDecks(controller.signal);
      setDecks(deckList);
    };
    loadDecks(); 
    return () => controller.abort();   
  }, [deckDeleted])
  
  function AllDecks(){
      return (
        <>
            <Link to="/decks/new" className="btn btn-secondary btn-lg">+ Create</Link>
            {decks.map((deck, index) => { return(
                <div className="card" key={index}>
                <div className="card-body">
                    <h3 className="card-title">{deck.name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">{`${deck.cards.length} cards`}</h6>
                    <p className="card-text">{deck.description}</p>
                    <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                    <DeleteButton deckId={deck.id} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted}/>
                </div>
                </div>
            )})}
        </>
      )
  }

  return (
    <Switch>
        <Route exact path="/">
            <AllDecks/>
        </Route>
        <Route path="/decks">
            <Decks decks={decks} setDecks={setDecks} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
    </Switch>
  )
}

export default Home;