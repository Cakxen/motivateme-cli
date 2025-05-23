#!/usr/bin/env node
const chalk = require('chalk');

// Define quote categories
const categories = {
  default: [
    "You are not lazy, you're just tired.",
    "Progress, not perfection.",
    "One small step today leads to big change tomorrow.",
    "Rest is part of the process."
  ],
  funny: [
    "I'm not lazy. I'm on energy-saving mode.",
    "Why fall in love when you can fall asleep?",
    "If Monday had a face, I’d punch it.",
    "Life is short. Smile while you still have teeth."
  ],
  deep: [
    "The only journey is the one within. – Rainer Maria Rilke",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "The unexamined life is not worth living. – Socrates"
  ]
};

// Helper: Display a random quote from a given category
function showRandomQuote(categoryName = 'default') {
  const quoteList = categories[categoryName] || categories.default;
  const quote = quoteList[Math.floor(Math.random() * quoteList.length)];
  console.log(chalk.cyanBright.bold(`\n💡 Motivational Quote [${categoryName}]:`));
  console.log(chalk.yellowBright(`"${quote}"`));
}

// Parse CLI arguments
const args = process.argv.slice(2);
const hasTimer = args.includes('--timer');
const categoryArg = args.find(arg => arg.startsWith('--') && arg !== '--timer')?.replace('--', '') || 'default';

// Timer mode
if (hasTimer) {
  console.log(chalk.greenBright(`⏰ Timer mode enabled. You’ll receive a quote every hour (press Ctrl+C to stop).`));
  showRandomQuote(categoryArg);

  // Set interval (3600000ms = 1 hour) — use 10000 (10s) for testing
  setInterval(() => {
    showRandomQuote(categoryArg);
  }, 3600000); // Change to 10000 for 10 sec test
} else {
  // Single quote mode
  showRandomQuote(categoryArg);
}
