"use strict"

const quotesList = [
 {
        author: "Aske", 
        text: "Fandme i orden!" 
        },

        {
        author: "Peter belly", 
        text: "Peter kan li' nam nam" 
    },

        {
        author: "Peter petersen", 
        text: "helt sikkert" 
    },

     {
        author: "Peter jensen", 
        text: "det er da helt vildt" 
    },

     {
        author: "Peter pan", 
        text: "Ønskeøen er fantastisk" 
    },

];

function getRandomquote() {
    if (quotesList.length === 0) {
    const errorMsg = "No quotes available!!!";
    document.getElementById("quotes").innerHTML= `<p>${errorMsg}</p>`;
    return;
}

const randomIndex = Math.floor(Math.random() * quotesList.length);

return quotesList[randomIndex];

}

function displayRandomQuote() {
    const randomQuote = getRandomquote();
    let quoteDetails = "";
    
    if (randomQuote) {
        quoteDetails += `
        <p>${randomQuote.text}</p>
        <h4>${randomQuote.author}</h4>
    `;
        document.getElementById("quotes").innerHTML = quoteDetails;
    }
}

const displayQuoteBtn = document.getElementById("displayQuoteBtn");
displayQuoteBtn.addEventListener("click", displayRandomQuote);


