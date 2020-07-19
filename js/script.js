/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quotes = [
  {quote: 'What is not started today is never finished tomorrow.', source: 'Johann Wolfgang von Goethe', cite: '', year: ''},
  {quote:'Start where you are. Use what you have. Do what you can.', source: 'Arthur Ashe', cite: '', year: ''},
  {quote: "Dream as if you'll live forever, live as if you'll die today.", source: 'James Dean', cite: '', year: ''},
  {quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', source: 'Benjamin Franklin', cite: '', year: ''},
  {quote: 'I need a room full of mirrors so I can be surronded by winnders.', source: 'Kanye West', cite: 'Twitter', year: '2014'}
]


// function returns Math.random * length of quotes array into an index for quotes array to be chosen at random
function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length)
  return quotes[random]
}

// assisnged vaible and testing into console
const quote = getRandomQuote()
console.log(quote)


// if the object has cite with and empty string it will not generate cite or year if it does it will
function printQuote() {
  if (quote.cite === ''){
    document.getElementById('quote-box').innerHTML = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}</p>`
  }else{
    document.getElementById('quote-box').innerHTML = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}<span class="citation">${quote.cite}</span><span class="year">${quote.year}</span></p>`
  }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
