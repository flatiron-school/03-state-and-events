// Accepts a Card object as a prop

// Set up an import for useState

function Card({ title, content="Add Some Content Here"}) {
    // props = { title: "My Title" }
    // props.title => "My Title"
    
    // Create a state to handle whether the card is visible or not
    const [ isVisible, setVisibility ] = useState(true);

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

    return (
        <div className="card">
            <h2 className="component-name">Card Component</h2>
            <h1>{title}</h1>
            <ColoredLine color="black" />
            <p>{content}</p>

            {/* Break Out Activity #1: Modify the onClick behavior of our Add to Cart <button> 
            to render only an H2 element saying “Added to Cart” in place of Card details. */}

            

            {/* Break Out Activity #2: Create a <Button /> Component to enable each Button to 
            manage its own isToggled state. 💡 To configure each <Button />, try passing a “name” 
            prop from Card.js */}

            <button className="button" onClick={}>Add To Cart | Remove From Cart</button>
            <br />
            <button className="button">♡ | ❤️</button>
        </div>
    );
}

export default Card;