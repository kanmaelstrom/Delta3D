fetch("/resources/items.json")
  .then(response => response.json())
  .then(items => {
    items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}" width="150">
        `;
        document.body.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load items:", err));
