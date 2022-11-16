import React from 'react'

export default function NavBar({setPage}) {
  return (
    <nav>
        <button onClick={() => setPage("planets")}>Planets</button>
        <button onClick={() => setPage("people")}>People</button>
    </nav>
  )
}
