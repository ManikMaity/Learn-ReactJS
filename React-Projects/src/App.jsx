import BookList from "./Components/ReactRouter/BookList.jsx"
import RouteHome from "./Components/ReactRouter/RouteHome.jsx"
import GymApp from "./Gym-App/GymApp.jsx"
import { Routes, Route, Link } from "react-router-dom"

function App() {

  const linkStyle = {
    color: "blue",
    textDecoration : "underline"
  }

  return (
    <>
    <nav>
      <ul style={linkStyle}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
  <Routes>
    <Route path="/" element={<RouteHome/>} />
    <Route path="/books" element={<BookList/>} />
  </Routes>
  </>
  )
}

export default App
