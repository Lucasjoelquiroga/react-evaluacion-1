import { useState } from 'react'

import './App.css'
import colors from './utils/color'
import QuoteBox from './component/QuoteBox'
import quote from './assets/JSON/quote.json'


function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
  return arr[indexRandom]
  }
  let userRandom =getRandomElement(quote)
  let colorRandom =getRandomElement(colors)
  
  const [randomQuotes, setRandomQuotes] = useState(userRandom)
  const [randomColor, setRandomColor] = useState(colorRandom)
  
  const objStyleF = {
    backgroundColor: randomColor
  }
  const getRandomAll = () => {
   userRandom =getRandomElement(quote)
   colorRandom =getRandomElement(colors)
    setRandomQuotes(userRandom)
    setRandomColor(colorRandom )
  }
  

  return (
    <div className="App" style={objStyleF} >
       <QuoteBox 
     randomQuotes = {randomQuotes}
     randomColor = {randomColor}
     getRandomAll = {getRandomAll}/> 
     
    </div>
  )
}

export default App
