const isLoggedIn = (prop) => {
    const value = (prop === false) ? <>false</> : <>true</>;
    return(
    <>{value}</>
    )
}
const User = () => {
    let loggedIn = false
    return (
        <div>{isLoggedIn(loggedIn)}</div>
    )
}

export default User