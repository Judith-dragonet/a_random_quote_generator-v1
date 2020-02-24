/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// This array with 5 objects that has 4 detailed properties: quote, source, year and citations.//

var quotes = [
  {
    quote: "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    source: "Sir Arthur Conan Doyle",
    year: 1887,
    citation: "Sherlock Holmes"
  },
  {
    quote:"This revolution, the information revolution, is a revolution of free energy as well, but of another kind: free intellectual energy.",
    source: "Steve Jobs",
    year: 2016,
    citation: "Motivating Thoughts of Steve Jobs"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source:"Harold Abelson",
    year: 1979,
    citation: "Structure and Interpretation of Computer Programs"
  },
  {
    quote: "Be nice to nerds. You may end up working for them. We all could.",
    source: "Charles J. Sykes",
    year: 1996,
    citation: "Dumbing Down Our Kids"
  },
  {
    quote: "Success isn't about how much money you make, it's about the difference you make in people's lives.",
    source: "Michelle Obama's",
    year: 2012,
    citation: "Speech at the Democratic National Convention in Charlotte"
  }
];

/***
 * Creates a random number and use that random number to return a random quote object from the quotes array.
 * The random number is used to calculate the maximun value.
 * The number varies between 0 and array max.
***/

function getRandomQuote(array) {
var quotesRandom =  Math.floor((Math.random() * quotes.length));
var objectfinalquote = array[quotesRandom];
return objectfinalquote;
}

/***
* This function prints the randomized quote to the web page using css properties.
* Stored the random quote into the var randomQuoteObject.
* The elements quote and source to be with <p> </p> tag. The source tag to be after the two if statements,
  concatenate the closing </p>.
* if staments checks if the random quotes have a 'citation property' and 'year property'
  and then concatenates with a <span></span>.
* Links the final string to the HTML file with 'innerHTML' property. This property return the HTML content of and element.
***/

function printQuote (){
  var randomQuoteObject =  getRandomQuote(quotes);
  var printClassQuote =
      "<p class='quote'>" + randomQuoteObject.quote + "</p>" +
      "<p class='source'>" + randomQuoteObject.source ;
      if(randomQuoteObject.citation){
        printClassQuote += "<span class='citation'>" + randomQuoteObject.citation + " </span>";
      }
      if (randomQuoteObject.year){
        printClassQuote += "<span class='year'>" + randomQuoteObject.year + " </span>"
      }
      printClassQuote += "</p>";
console.log(randomQuoteObject);
console.log(randomQuoteObject.quote);
      document.getElementById('quote-box').innerHTML = printClassQuote;
console.log(printClassQuote);
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
