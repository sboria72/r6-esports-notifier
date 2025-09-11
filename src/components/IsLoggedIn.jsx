import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

const isLoggedIn = ({user}) => {

    if(!user){
        return (
          <Link to="/login" className="btn btn-primary">Sign In</Link>
        )
    }
    return(
        <div>
            <>Signed in as: <Link to="/user">{user.userName}</Link></>
        </div>
    )
}
export default isLoggedIn