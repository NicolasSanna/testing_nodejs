// On importe la bibliothèque 'supertest' qui permet de tester des requêtes HTTP
const request = require("supertest");

// On importe l'application à tester depuis le fichier ../src/hello
const app = require("../src/hello");

// Début de la suite de tests pour la route GET /hello/:name
describe("GET /hello/:name", () => {

  // Test pour vérifier si la réponse retourne un message de bienvenue avec le nom
  test("It should respond with a welcome message with the name", async () => {
    // On envoie une requête GET à l'application pour accéder à la route /hello/Bob
    const response = await request(app).get("/hello/Bob");

    // Vérification que le code de statut de la réponse est bien 200 (OK)
    expect(response.statusCode).toBe(200);

    // Vérification que le texte de la réponse est bien "Hello, Bob!"
    expect(response.text).toEqual("Hello, Bob!");
  });
});

// Début de la suite de tests pour la route GET /goodbye/:name
describe("GET /goodbye/:name", () => {

  // Test pour vérifier si la réponse retourne un message d'au revoir avec le nom
  test("It should respond with a goodbye message with the name", async () => {
    // On envoie une requête GET à l'application pour accéder à la route /goodbye/Bob
    const response = await request(app).get("/goodbye/Bob");

    // Vérification que le code de statut de la réponse est bien 200 (OK)
    expect(response.statusCode).toBe(200);

    // Vérification que le texte de la réponse est bien "Goodbye, Bob!"
    expect(response.text).toEqual("Goodbye, Bob!");
  });
});
