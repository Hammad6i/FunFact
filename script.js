const facts = [
  "Honey never spoils. Archaeologists have found 3000-year-old honey that's still edible!",
  "A single strand of spaghetti is called a 'spaghetto'.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There are more stars in the universe than grains of sand on all Earth's beaches.",
  "Wombat poop is cube-shaped.",
  "Humans share about 60% of their DNA with bananas.",
  "A day on Venus is longer than its year.",
  "Sharks have been around longer than trees.",
  "Sloths can hold their breath longer than dolphins."
];

function newFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
}

// Load a random fact on page load
window.onload = newFact;
