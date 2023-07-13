var $quote = document.getElementById("quote"),
  $author = document.getElementById("author-quote"),
  btnQuote = document.getElementById("show-quote"),
  btnRun = document.getElementById("btn-run"),
  divBtn = document.getElementById("div-btn");
(innerQuote = ""), (innerAuthor = ""), (currentIndex = 0);
var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.” ",
    author: "― Oscar Wilde ",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”  ",
    author: "― Marilyn Monroe  ",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author: "― Albert Einstein  ",
  },
  {
    quote: "“So many books, so little time.” ",
    author: "― Frank Zappa ",
  },
  {
    quote: "“A room without books is like a body without a soul.” ",
    author: "― Marcus Tullius Cicero ",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    author: "― Bernard M. Baruch ",
  },

  {
    quote: "“Never tell the truth to people who are not worthy of it.”  ",
    author: "― Mark Twain ",
  },
  {
    quote:
      "“I love you as certain dark things are to be loved ,in secret between the shadow and the soul.”  ",
    author: "― Pablo Neruda",
  },
  {
    quote: "“Knowing yourself is the beginning of all wisdom.” ",
    author: "― Aristotle ",
  },
  {
    quote:
      "“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”",
    author: "― William Shakespeare",
  },
];
var runAgainQuote = [];
var getQuote = function (arr) {
  if (arr.length > 0) {
    currentIndex = Math.floor(Math.random() * arr.length);
    innerQuote = arr[currentIndex].quote;
    innerAuthor = arr[currentIndex].author;
    $quote.innerHTML = `<h2  class="lh-base">${innerQuote}</h2>`;
    $author.innerHTML = `<h3 >${innerAuthor}</h3>`;
    runAgainQuote.push(arr[currentIndex]);
    arr.splice(currentIndex, 1);
  } else {
    $quote.innerHTML = `<h2  class="lh-base"> "The quotes for today have ended. Please come back tomorrow for more inspiration!"</h2>`;
    $author.innerHTML = `<h3 ></h3>`;
  }
};
btnQuote.addEventListener("click", function () {
  return getQuote(quotes);
});
btnRun.addEventListener("click", function () {
  return getQuote(runAgainQuote);
});
console.log(runAgainQuote);
