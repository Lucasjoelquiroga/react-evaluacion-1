import React from "react";




const QuoteBox = ({randomQuotes, randomColor, getRandomAll}) => {
const objStyle = {
   color: randomColor 
}
const objStyleF = {
   backgroundColor: randomColor 
}

    console.log(randomQuotes)
    return (
    <div className="card" style={objStyle}>
        
           
            <p className="card-phrase"><i className="fa-solid fa-quote-left"></i>{`${randomQuotes.quote}`}</p>
           <div className="card-item">

            <p className="card-author"><span>{`${randomQuotes.author}`}</span></p> 
            

       
             <button onClick={getRandomAll} className="card-btn" style={objStyleF}>&#62;</button>
           </div>
    </div >

    )
}
export default QuoteBox