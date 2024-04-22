const voyelles = ["a", "e", "i", "o", "u", "y"];
const texte = "Bonjour je suis un string";

const searchVoyelles = (voyelles, texte) => {
  let nbVoyelles = 0;
  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i])) {
      nbVoyelles++;
    }
  }
  // console.log("il y a", nbVoyelles, "voyelles dans cette phrase.");
};

searchVoyelles(voyelles, texte);
