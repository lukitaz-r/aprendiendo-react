import { useState, useEffect } from 'react'
import './App.css'
const CAT_API_FACT = 'https://catfact.ninja/fact'

const App = () => {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    fetch(CAT_API_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ', 1).join('')
        console.log(firstWord)
        setImage(`cat/says/${firstWord}?&size=50&width=500&height=500&fontColor=%23fff`)
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`https://cataas.com/${image}`} alt={`Image of a cat using the first word of ${fact}`} />}
    </main>
  )
}

export default App
