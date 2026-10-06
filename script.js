const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];


  // Bruk en array metode for å hente ut kun produkter som koster mindre enn 200.

const cheapProducts = products.filter(product => product.price < 200); // .filter "filtrerer ut" et vilkår vi ønsker (produktene som koster mindre enn 200 kroner).
console.log(cheapProducts);

// Bruk en array metode for å hente kun produktnavnene for rask oversikt.

const nameProducts = products.map(product => product.name); // .map lager en ny matrise av elementene vi øsnker.
console.log(nameProducts);

// Bruk en eller flere array metoder for å hente ut alle produkt navnene innendfor kategori "electronics".

const electroProducts = products.filter(product => product.category === "electronics").map(product => product.name);
// først filtrerer vi ut vilkåret og så henter vi matrise av det vi vil.
console.log(electroProducts);

//Bruk en array metode for å finne ut hvis noen av produktene koster 1000 eller mer.

const expansiveProducts = products.some(product => product.price >= 1000); // .some bruker boolean til å sjekke om elementene oppfyller vilkåret.
console.log(expansiveProducts);

// Bruk en array metode for å finne den totale kostnaden av alle produktene.

const totPriceProducts = products.reduce((total, product) => total + product.price, 0); // .reduce akkumulerer alle elementene til én enkelt verdi.
console.log(totPriceProducts);

