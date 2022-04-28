import React, {useState, useEffect} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {readCard} from '../utils/api/index';

function StudyCard({cards}){
    const [cardNum, setCardNum] = useState(1);
    const [card, setCard] = useState({});
    const [flipped, setFlipped] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const cardId = cards[cardIndex].id;
    const history = useHistory();
    const {url} = useRouteMatch();

    useEffect(()=>{
        const controller = new AbortController();
        async function loadCard(){
            const cardStudying = await readCard(cardId, controller.signal);
            setCard(cardStudying);
        };
        loadCard()
        return () => controller.abort();
    }, [cardIndex]);

    const handleFlip = () => setFlipped(!flipped);

    const handleNext = () => {
        setFlipped(!flipped);
        setCardNum(cardNum+1);
        setCardIndex(cardIndex+1);
    }

    const handleLast = () => {
        const result = window.confirm("Restart cards? Click 'cancel' to return to the home page.");
        if(result){
            setCardNum(1);
            setCardIndex(0);
            setFlipped(!flipped);
            history.push({url})
        } else {
            history.push("/")
        }
    }

    if(!flipped && cardNum<=cards.length){
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card {cardNum} of {cards.length}</h4>
                    <p className="card-text">{card.front}</p>
                    <button className="btn btn-secondary" onClick={handleFlip}>Flip</button>
                </div>
            </div>
        )
    } else if (cardNum<cards.length){
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card {cardNum} of {cards.length}</h4>
                    <p className="card-text">{card.back}</p>
                    <button className="btn btn-secondary" onClick={handleFlip}>Flip</button>
                    <button className="btn btn-primary" onClick={handleNext}>Next</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card {cardNum} of {cards.length}</h4>
                    <p className="card-text">{card.back}</p>
                    <button className="btn btn-secondary" onClick={handleFlip}>Flip</button>
                    <button className="btn btn-primary" onClick={handleLast}>Next</button>
                </div>
            </div>
        )
    }
    
    
}

export default StudyCard;