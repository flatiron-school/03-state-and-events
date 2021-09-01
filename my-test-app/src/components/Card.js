// Accepts a Card object as a prop

// Set up an import for useState
import { useState } from 'react';

function Card({ title, content="Add Some Content Here"}) {
    // props = { title: "My Title" }
    // props.title => "My Title"
    
    // Create a state to handle whether the card is visible or not
    const [ isAdded, setAdded ] = useState(false);
    const [ isLiked, setLiked ] = useState(false);

    function handleVisibility() {
        setAdded(!isAdded);
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: "10rem"
            }}
        />
    );

    const cardsVisible = isAdded ? <h2>Added To Cart</h2> : setCardContent();

    function setCardContent() {
        return (
            <div>
                <h2 className="component-name">Card Component</h2>
                <h1>{title}</h1>
                <ColoredLine color="black" />
            </div>
        );
    }

    return (
        <div className="card">
        
            {cardsVisible}

            <button className="button" onClick={() => setAdded(!isAdded)}>
                {isAdded ? "Remove From Cart" : "Add To Cart"} 
            </button>
            <br />
            <button className="button" onClick={() => setLiked(!isLiked)}>
                {isLiked ? "❤️" : "♡"}
            </button>

            {/* Break Out Activity #1: Modify the onClick behavior of our Add to Cart <button> 
            to render only an H2 element saying “Added to Cart” in place of Card details. */}

            {/* Break Out Activity #2: Create a <Button /> Component to enable each Button to 
            manage its own isToggled state. 💡 To configure each <Button />, try passing a “name” 
            prop from Card.js */}

        </div>
    );
}

export default Card;