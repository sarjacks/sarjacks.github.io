// Define arrays of words
const adjectives = ["Amazing", "Brilliant", "Courageous", "Determined", "Enthusiastic"];
const nouns = ["Dreamer", "Achiever", "Champion", "Hero", "Innovator"];
const verbs = ["Inspire", "Motivate", "Encourage", "Empower", "Transform"];

// Function to generate a random index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to generate a random inspirational message
function generateMessage() {
  const randomAdjective = adjectives[getRandomIndex(adjectives)];
  const randomNoun = nouns[getRandomIndex(nouns)];
  const randomVerb = verbs[getRandomIndex(verbs)];
  
  return `You are ${randomAdjective} ${randomNoun} who ${randomVerb} others.`;
}

// Generate and display a random inspirational message
console.log(generateMessage());
