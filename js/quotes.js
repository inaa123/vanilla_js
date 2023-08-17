const quotes = [  //object 형태의 명언10개가 든 Array. 그 안(quote와 author)에 text로 내용이 들어감.
    {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    },
    {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    },
    {
    quote:
        "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
    },
    {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    },
    {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
    },
    {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
    },
    {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    },
    {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
    },
    {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
    },
    {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
    }, 
];

const quote = document.querySelector("#quote span:first-child"); //html에서 id가 quote 안에, 첫번째 span
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //todaysQuotes는 quote와 author를 가지고 있음.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;