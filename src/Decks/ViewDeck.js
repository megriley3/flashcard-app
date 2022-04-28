import React from 'react';
import {useParams, useRouteMatch, Link} from 'react-router-dom';
import DeleteButton from '../Layout/DeleteButton';

function ViewDeck({deck, deckDeleted, setDeckDeleted}){
    const {url} = useRouteMatch();
    const {deckId} = useParams();


    const {name} = deck;
    const {cards} = deck;

    if(cards){
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page" ><a href={url}>{name}</a></li>
                    </ol>
                </nav>
                <main>
                    <h1>{name}</h1>
                    <p>{deck.description}</p>
                    <div className="btn-group">
                        <a href={`${url}/edit`} className="btn btn-secondary active" aria-current="page">Edit</a>
                        <a href={`${url}/study`} className="btn btn-primary">Study</a>
                        <a href={`${url}/cards/new`} className="btn btn-primary">+ Add Cards</a>
                        <DeleteButton deckId={deckId} deckDeleted={deckDeleted} setDeckDeleted={setDeckDeleted}/>
                    </div>
                    <div className="container">
                        <h2>Cards</h2>
                        {cards.map((card, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col">
                                            <p>{card.front}</p>
                                        </div>
                                        <div className="col">
                                            <p>{card.back}</p>
                                            <Link to={`${url}/cards/${card.id}/edit`} className="btn btn-secondary">Edit</Link>
                                            <DeleteButton deck={false} cardId={card.id}/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                        
                </main>
            </>
        )
    } else{
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a href={url}>{name}</a></li>
                    </ol>
                </nav>
                <main>
                    <h1>{name}</h1>
                    <p>{deck.description}</p>
                    <div className="btn-group">
                        <a href={`${url}/edit`} className="btn btn-secondary active" aria-current="page">Edit</a>
                        <a href={`${url}/study`} className="btn btn-primary">Study</a>
                        <a href={`${url}/cards/new`} className="btn btn-primary">+ Add Cards</a>
                        <DeleteButton deckId={deckId} deckDeleted={false}/>
                    </div>
                    <div className="container">
                        <h2>Cards</h2>
                        <p>Loading...</p>
                    </div>
                        
                </main>
            </>
        )
    }

    
}


export default ViewDeck;