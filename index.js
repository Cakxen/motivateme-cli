// index.js
const quotes = [
  "You are not lazy, you're just tired.",
  "Progress, not perfection.",
  "One small step today leads to big change tomorrow.",
  "Rest is part of the process."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(`💡 Motivational Quote: ${randomQuote}`);
