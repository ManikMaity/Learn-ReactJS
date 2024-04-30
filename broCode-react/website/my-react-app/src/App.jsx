import UserGreeting from "./UserGreeting.jsx"

function App() {

  return(
    <>
    <UserGreeting username="Manik" isLogedIn = {true}/>
    <UserGreeting  isLogedIn = {false}/>
    </>
  )
}

export default App
