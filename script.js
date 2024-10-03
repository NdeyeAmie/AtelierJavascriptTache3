// il existe 6 principaux types d'opérateurs :
/*

*/
let a = 3;
let b = 4;
let c = 5;

// Calcul de la somme
let somme = a + b + c;
console.log("La somme de a , b et c est : " + somme);

// la somme de a + b

let sommeDeab = a+b;
console.log("La somme de a e b  est : " + sommeDeab * c);



let produit = a * b * c;
 
alert("Le produit de a , b et c est : " + produit); 
    
// Boucle pour parcourir les nombres de 1 à 9
for (let i = 1; i <= 9; i++) {
    console.log("Table de multiplication de :" + " " + i );
    
    /* Boucle pour calculer et afficher la multiplication de 1 à 9
    La boucle 'for' n'est utilisée que lorsque le nombre d'itérations est déjà connu. 
    La boucle 'while' est utilisée lorsque le nombre d'itérations est inconnu au préalable.
    */
    for (let j = 1; j <= 9; j++) {
      console.log(i + " " + "x" + " " + j + " " + "=" + " " + i * j);
    }
  }

  
