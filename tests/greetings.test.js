// On importe les fonctions 'greet' et 'bye' à partir du fichier ../service/greetings
const { greet, bye } = require("../service/greetings");

// Définition d'une suite de tests pour le service de salutations
describe("Testing our Greetings Service", () => {
  
  // Premier test pour vérifier si la fonction greet retourne le bon message de bienvenue
  test("Should return a welcome message with the name", () => {
    // On appelle la fonction 'greet' avec "Bob" et on vérifie que le résultat est "Hello, Bob!"
    expect(greet("Bob")).toBe("Hello, Bob!");
  });

  // Deuxième test pour vérifier si la fonction bye retourne le bon message d'au revoir
  it("Should return a goodbye message with the name", () => {
    // On appelle la fonction 'bye' avec "Bob" et on vérifie que le résultat est "Goodbye, Bob!"
    expect(bye("Bob")).toBe("Goodbye, Bob!");
  });
});