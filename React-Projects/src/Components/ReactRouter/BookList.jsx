import React from 'react'

const style = {
    fontSize : "2rem",
    fontWeight : "bold"
}

function BookList() {
  return (
    <div>
    <h1 style={style}>This is books</h1>
      {[1, 2, 3].map((item, i) => <p key={i}>{`Book${item}`}</p>)}
    </div>
  )
}

export default BookList
