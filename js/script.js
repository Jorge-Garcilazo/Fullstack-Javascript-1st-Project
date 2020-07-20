/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// array with objects inside
const quotes = [
  {quote: 'What is not started today is never finished tomorrow.', source: 'Johann Wolfgang von Goethe', cite: '', year: '', tag: 'Inspirational'},
  {quote:'Start where you are. Use what you have. Do what you can.', source: 'Arthur Ashe', cite: '', year: '', tag: 'Inspirational'},
  {quote: "Dream as if you'll live forever, live as if you'll die today.", source: 'James Dean', cite: '', year: '', tag: 'Do Your Most'},
  {quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', source: 'Benjamin Franklin', cite: '', year: '', tag: 'Life Lessons'},
  {quote: 'I need a room full of mirrors so I can be surronded by winners.', source: 'Kanye West', cite: 'Twitter', year: '2014', tag: 'Funny'}
]


// function returns Math.random * length of quotes array into an index for quotes array to be chosen at random
function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length)
  return quotes[random]
}

// if the object has cite/year/tag set to an empty string it will not display it//else if it will display tag//else it will display all 3 (cit,year,tag)
function printQuote() {
  const quote = getRandomQuote()
  if (quote.cite === '' && quote.year === '' && quote.tag === ''){
    document.getElementById('quote-box').innerHTML = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}</p>`
    colorchange() // calls colorchange function to change color everytime button is clicked
  }else if (quote.cite === '' && quote.year === ''){
    document.getElementById('quote-box').innerHTML = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}<ul><li>${quote.tag}</li><ul></p>`
    colorchange() // calls colorchange function to change color everytime button is clicked
  }else {
    document.getElementById('quote-box').innerHTML = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}<span class="citation">${quote.cite}</span><span class="year">${quote.year}</span><ul><li>${quote.tag}</li><ul></p></p>`
    colorchange() // calls colorchange function to change color everytime button is clicked
  }
}


// function gets random values for a random rgb color value
function colorchange(){
  r = Math.floor(Math.random() * 255 + 1)
  g = Math.floor(Math.random() * 255 + 1)
  b = Math.floor(Math.random() * 255 + 1)
  return document.body.style.background = `rgb(${r}, ${g}, ${b})`

}
// calls the colorchange function every 7 seconds
setInterval(colorchange, 7000)

// calls the printquot function ever 7 seconds
setInterval(printQuote, 7000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
