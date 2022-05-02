import {useRouteMatch} from 'react-router-dom';
import Cards from '../Cards/index';

function StudyDeck({deckUrl, deckId, deck}){

    const {url} = useRouteMatch();

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