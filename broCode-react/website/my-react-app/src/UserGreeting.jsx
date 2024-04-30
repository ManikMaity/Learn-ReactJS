
// eslint-disable-next-line react/prop-types
function UserGreeting ({username = "User", isLogedIn = false}){

    const welcomeEle =  <h1 className="user-message">Hi, {username}.</h1>;
    const logInEle = <h1 className="login-message">Please log in.</h1>;
    
    return (
        isLogedIn ? welcomeEle : logInEle
    );
}

export default UserGreeting;