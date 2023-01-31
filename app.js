const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80,
        id: 4
      }
];


{/* Components creation*/}

const Header = (props) => {
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
      </header>  
    );
}


const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score = {props.score} />
        </div>

         
    );
}

const Counter = (props) => {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return(
        <div className="scoreboard">
            <Header 
            title="Scoreboard" 
            totalPlayers={props.initialPlayers.length} 
            />

            {/* Player list*/}
            {/* Map ha la funzione del for each looppa gli elementi all'interno dell'array */} 
            {props.initialPlayers.map( player =>
                <Player 
                    {...player }
                    score= { player.score }
                    key= { player.id.toString() }
                />
            )}

        </div>
    );
}

ReactDOM.render(
    // Qui passare l'array
    <App initialPlayers= { players } />,
    document.getElementById('root')
);
