let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//el loop tiene 3 parametros: inicialización, condición, actualización

for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
            console.log(pronoun[x] + adj[y] + noun[z] + ".com");
        }
    }
}