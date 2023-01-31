
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
                {props.nome}
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

const App = () => {
    return(
        <div className="scoreboard">
            <Header 
            title="Scoreboard" 
            totalPlayers={1} 
            />

            {/* Player list*/}
            <Player nome="Francesco" score= {50} />
            <Player nome="Giovanni" score= {10} />
            <Player nome="Marta" score= {38} />
            <Player nome="Giulia" score= {26} />


        

            
            
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
