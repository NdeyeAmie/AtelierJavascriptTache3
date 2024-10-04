let etudiants = [
    { prenom: "Ndeye Amie", nom: "Thiam", age: 22, note: 15 },
    { prenom: "Nafi", nom: "Badji", age: 21, note: 18 },
    { prenom: "Awa", nom: "Sow", age: 23, note: 16 },
    { prenom: "Baba", nom: "Faye", age: 20, note: 14 },
    { prenom: "Nafi", nom: "Diop", age: 19, note: 12 },
    { prenom: "Omar", nom: "Faye", age: 24, note: 17 },
    { prenom: "Saliou", nom: "Diallo", age: 22, note: 20 },
    { prenom: "Cheikh", nom: "Thiam", age: 25, note: 13 },
    { prenom: "Mamadou", nom: "Kane", age: 21, note: 11 },
    { prenom: "Sokhou", nom: "Thiam", age: 23, note: 19 }
  ];
  
  // Afficher dans la console
  console.log(etudiants);
  
  // Afficher sur la page HTML
/*  querySelector() : Cette méthode sélectionne un élément
 dans le DOM (Document Object Model) en utilisant un sélecteur CSS.*/
  let tableBody = document.querySelector("#studentTable tbody");
  
//forEach() Cette méthode permet de parcourir chaque élément d'un tableau
  etudiants.forEach(etudiant => {
//createElement() : Cette méthode crée un nouvel élément dans le html
    let table = document.createElement("tr");
  
    let prenomEtudiants = document.createElement("td");
    prenomEtudiants.textContent = etudiant.prenom;
    table.appendChild(prenomEtudiants);
  
    let nomEtudiants = document.createElement("td");
    nomEtudiants.textContent = etudiant.nom;
    table.appendChild(nomEtudiants);
  
    let ageEtudiants = document.createElement("td");
    ageEtudiants.textContent = etudiant.age;
    table.appendChild(ageEtudiants);
  
    let noteEtudiants = document.createElement("td");
    noteEtudiants.textContent = etudiant.note;
    table.appendChild(noteEtudiants);
  
    tableBody.appendChild(table);
  });
  