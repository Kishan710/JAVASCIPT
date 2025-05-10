const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;
}
