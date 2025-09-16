import teams from '../data/teams.json'

const FetchTeams = () => {

    return (
        <div id = "container">
            {teams.map(team => (
                <div id = "col-6">
                    <h3>{team.name}</h3>
                    <h5>Players:</h5>
                    <ul>
                        {team.players.map(player => (
                            <li>{player.name}   Age: {player.age}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default FetchTeams