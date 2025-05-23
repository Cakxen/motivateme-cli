#!/usr/bin/env node

import chalk from "chalk";
import process from "node:process";

const args = process.argv.slice(2);
const category = args.includes("--funny") ? "funny" :
                 args.includes("--deep") ? "deep" : "default";

// Quotes by category
const quotes = {
  default: [
    "You are not lazy, you're just tired.",
    "Progress, not perfection.",
    "One small step today leads to big change tomorrow.",
    "Rest is part of the process.",
    "Believe in your ability to figure it out.",
  ],
  funny: [
    "I'm not lazy, I'm on energy-saving mode.",
    "Why fall in love when you can fall asleep?",
    "If you think nobody cares, try missing a few payments.",
    "Some people graduate with honors, I am just honored to graduate.",
  ],
  deep: [
    "What you seek is seeking you. – Rumi",
    "We suffer more in imagination than in reality. – Seneca",
    "The quieter you become, the more you can hear. – Ram Dass",
    "Your perception creates your reality.",
  ]
};

// Color based on category
const colors = {
  default: chalk.green,
  funny: chalk.yellow,
  deep: chalk.blue
};

const categoryQuotes = quotes[category] || quotes.default;
const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

console.log(colors[category](`💡 ${randomQuote}`));
