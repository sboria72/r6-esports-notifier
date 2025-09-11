import {useLocation} from 'react-router-dom'

const User = () => {
    const location = useLocation()
    const credentials = location.state
    return (
        <div>
            Hello {credentials.userName}
        </div>
    )
}

export default User