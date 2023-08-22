export default {
  check,
  lookup,
};

var elements;

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
  // TODO: determine if `inputWord` can be spelled
  // with periodic table symbols; return array with
  // them if so (empty array otherwise)

  return [];
}

function lookup(elementSymbol) {
  for (let elemnt of elements) {
    if (element.symbol.toLoweCase() == elementSymbol) {
      return element;
    }
  }
}
