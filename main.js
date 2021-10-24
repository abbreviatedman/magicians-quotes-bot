const quotes = [
  {
    id: 1,
    text: "hi",
  },
  {
    id: 2,
    text: "hello",
  },
  {
    id: 3,
    text: "how are you",
  },
];

const unusedIds = {};
setInterval(() => {
  if (!Object.keys(unusedIds).length) {
    quotes.forEach((quote) => (unusedIds[quote.id] = true));
  }

  const ids = Object.keys(unusedIds);
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  console.log(quotes.find((quote) => quote.id == randomId).text);
  delete unusedIds[randomId];
}, 2000);
