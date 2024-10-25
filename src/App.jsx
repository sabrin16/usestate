import { useState } from "react"

function App() {

  // let counter = 0;

  const [counter, setCounter] = useState(0)

  const handleclick = (amount) => {
    setCounter(prev => {
      return prev + amount
    })
  }

  const [firstName, setfirstName] = useState('Joakim')
  const [lastName, setlastName] = useState('wahlström')


  const fulName = firstName + '' + lastName;

  return (
    <div className="container">
      <h1>{ counter }</h1>
      <button onClick={() => handleclick(1)}>Increment by 1</button>
      <button onClick={() => handleclick(10)}>Increment by 10</button>


      <div>
        <p>{firstName} {lastName}</p>
        <p>fulName</p>
        <button onClick={() => {
          setlastName('Lindh')
        }}>change Name</button>
      </div>
    </div>
       
  )
}
export default App