import { contextBridge } from 'electron';

const quotes = {
  funny: [
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don’t scientists trust atoms? Because they make up everything!"
  ],
  deep: [
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "In the middle of difficulty lies opportunity. — Albert Einstein"
  ],
  default: [
    "Keep pushing forward no matter what.",
    "Success is the sum of small efforts repeated day in and day out."
  ],
};

function getRandomQuote(category = 'default') {
  const list = quotes[category] || quotes['default'];
  const randomQuote = list[Math.floor(Math.random() * list.length)];
  return randomQuote;
}

contextBridge.exposeInMainWorld('motivateme', {
  getQuote: (category) => getRandomQuote(category)
});
