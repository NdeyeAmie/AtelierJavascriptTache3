let entier = 10;
let chaine = "Bonjour";
let decimal = 12.5;

// Fonction qui utilise switch-case pour chaque type de variable
function afficheVariable(variable) {
  switch (typeof variable) {
    case 'number': 
      if (Number.isInteger(variable)) {
        alert("C'est un entier: " + variable);
      } else {
        alert("C'est un nombre décimal: " + variable);
      }
      break;
    
    case 'string':
      alert("C'est une chaîne de caractères: " + variable);
      break;
    
    default:
      alert("Type de variable inconnu");
  }
}

// Appel des fonctions pour chaque variable
afficheVariable(entier);  // Affiche l'entier
afficheVariable(chaine);  // Affiche la chaîne de caractères
afficheVariable(decimal); // Affiche le nombre décimal
