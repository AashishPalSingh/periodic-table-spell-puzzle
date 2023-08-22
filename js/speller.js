export default {
  check,
  lookup,
};

var elements;
var symbols = {};

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
  for (let element of elements) {
    symbols[element.symbol.toLowerCase()] = element;
  }
}

function check(inputWord) {
  if (inputWord.length > 0) {
    for (let element of elements) {
      let symbol = element.symbol.toLowerCase();
      if (symbol.length <= inputWord.length) {
        if (inputWord.slice(0, symbol.length) == symbol) {
          if (inputWord.length > symbol.length) {
            let res = check(inputWord.slice(symbol.length));
            if (res.length > 0) {
              return [symbol, ...res];
            }
          } else {
            return [symbol];
          }
        }
      }
    }
  }

  return [];
}

function lookup(elementSymbol) {
  return symbols[elementSymbol];
}
