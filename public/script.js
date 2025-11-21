fetch("/resources/items.json")
  .then(response => response.json())
  .then(items => {
    console.log(items);
  });
