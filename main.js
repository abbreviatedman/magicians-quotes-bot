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
quotes.forEach((quote) => (unusedIds[quote.id] = true));

setInterval(() => {
  const ids = Object.keys(unusedIds);
  let found = false;
  while (!found) {
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    if (randomId in unusedIds) {
      found = true;
      delete unusedIds[randomId];
      console.log(quotes[randomId - 1].text);
    }
  }

  if (!Object.keys(unusedIds).length) {
    quotes.forEach((quote) => (unusedIds[quote.id] = true));
  }
}, 2000);
