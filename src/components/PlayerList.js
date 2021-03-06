import Player from "./Player";

export default function PlyaerList(props){
    const players = props.players.map(player => <Player name={player.firstName} jersey={player.jerseyNumber} hobbies={player.hobbies}/>)
    return(
        <div className="players-list">
            {players}
        </div>
    );
};
     