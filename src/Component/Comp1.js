import React, { useState } from 'react'

export default function Comp1() {
  const [userData, setUserData] = useState([]);


  
  useState(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(resp => setUserData(resp))
  },
    []);



  return (
    <div>
      {
        userData.map(x => <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{x.address.city}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>)
      }
    </div>
  )
}
