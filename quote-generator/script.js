const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// let apiQuotes = [];

// // Get quotes from API
// async function getQuotes(){
//     const APIURL = 'https://type.fit/api/quotes';

//     try{ 
//         const response = await fetch(APIURL);
//         apiQuotes = await response.json();
//         pickQuote();
//     } catch(error){
//         // catch error
//     }
// }

// pick a random quote from local source
function pickQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;

    // check the length of the quote to determine styling
    quote.text.length > 30 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');

    quoteText.textContent = quote.text;
}

// tweet the selected quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// // execution - applies for the API version
// getQuotes(); - applies for the API version

pickQuote();
newQuoteBtn.addEventListener("click", pickQuote);
twitterBtn.addEventListener("click", tweetQuote);