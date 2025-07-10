 
  var addQuotes =[ 
{quote : "“Be yourself; everyone else is already taken.”",
  author :' ― Oscar Wilde ',
    img :"images/5.jpg"
} 
,
{quote : " I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, .”",
  author :"― Marilyn Monroe",
  img :"images/1.jpg"
},
{
quote:"“So many books, so little time.”",
author:"― Frank Zappa`",
  img :"images/2.jpg"
}
,{
quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
author:"Albert Einstein",
  img :"images/3.webp"
}
,{
quote:"“A room without books is like a body without a soul.”",  
author:"― Marcus Tullius Cicero",  
  img :"images/4.webp"
},{
  quote:"“ Be yourself ,not them .”",  
author:"―  Omar Rayan",  
  img :"images/4.webp"
}
 
]
var lastIndex =-1;
function displayQuote() {
    var randomIndex =Math.floor(Math.random() * addQuotes.length);;
  if (randomIndex === lastIndex) {
    randomIndex = (randomIndex + 1) % addQuotes.length;
  }

  lastIndex = randomIndex;
  var quote = addQuotes[randomIndex].quote;     /// [return number== index]
  var author = addQuotes[randomIndex].author;     /// [return number== index]
     /// [return number== index]
 
  document.getElementById("display").innerHTML = `
    <img width="250px" height="250px" src="${addQuotes[randomIndex].img}" class="rounded-circle" />
  <h4 class="h1">${addQuotes[randomIndex].quote}</h4>
  <h3 class="text-success">- ${addQuotes[randomIndex].author}</h3>`;
 
}

 
 































