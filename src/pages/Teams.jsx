import data from '../../teams.json'
import FetchTeams from '../components/FetchTeams'
const Teams = () => {
    FetchTeams()
    console.log("Fetch Teams called")
    return (
        <div>this is the teams page</div>
    )
}

export default Teams