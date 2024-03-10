const qoute = document.getElementById("qoute");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  
  qoute.innerHTML = data.content;
  author.innerHTML = data.author;

}

getQuote(api_url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML + 
  "---- by " + author.innerHTML, "Tweet window", "width=600, height=300");
}
