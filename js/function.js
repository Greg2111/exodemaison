/*changer la couleur du titre */


// let color = document.getElementById(`title`)

// function js_click() {
//   let color = document.getElementById(`title`)
//   color.style.color = title.style.color == 'red' ? 'black' : 'red';
//   color.style.position = title.style.position == 'absolute' ? 'static' : 'absolute';
//   color.style.transform = title.style.transform == 'rotate(90deg)' ? 'none' : 'rotate(90deg)';
// }

/* recuperer les données d'un formulaires qui a l'ID user_form & afficher les valeurs dans une boites qui a l'ID user_data */

// function getFormValues() {
//   let event = window.event
//   event.preventDefault();

//  let firstName = document.getElementById('firstname').value;
//  let lastName = document.getElementById('lastname').value;

//  console.log(firstName, lastName);

//  let targetContainer = document.getElementById('user_data')

//  targetContainer.innerHTML = `${lastName} ${firstName}`


// }


/*exo 3    */



// function getFormValues() {
//   let event = window.event
//   event.preventDefault();

//  let firstName = document.getElementById('firstname').value;
//  let lastName = document.getElementById('lastname').value;

//  if (firstName || lastName == '') {
//    alert('Please fill all inputs')
//    return;
//  }
//  const trElement = document.createElement('tr')
//  let tdElement = document.createElement('td')
//  tdElement.innnerText = firstNameElement.value;
//  trElement.append(tdElement)

//  let tdElement2 = document.createElement('td')
//  tdElement2.innerText = lastNameElement.value
//  trElement.append(tdElement2)


//  let tdElement3 = document.createElement('td')
//  let deleteButton = document.createElement('button')
//  deleteButton.setAttribute('type', 'button')
//  deleteButton.innerText ='Delete';
//  deleteButton.addEventListener('click', function(e) {
//    e.target.parentNode.parentNode.remove()
//  })
//  tdElement3.append(deleteButton)
//  trElement.append(tdElement3)


// }

// function addRowTable(tableId, ) {
//   const table = document.getElementById(tableId)
//   const tableBody =  table.querySelector('tbody')
// }


/**
 * Exercice nombre aleatoire
 * l'utilisateur entre un nombre entre 0 et 99
 * le script genère un nombre aleatoire entre 0 et 99  au demarage
 * si le nbre rentré par l'utilisateur < au nbre aleatoire
 */


/**
 * Exercice de maison
 */

 let nbrRandom = Math.floor(Math.random() * 100);


 let count = 0;
 let btn = document.querySelector(".btn");


 function deviner(event) {
   event = window.event
   event.preventDefault();

   let guess = document.getElementById('nbrdevine');
   console.log(nbrRandom, guess.value);

   if (guess.value === '') {
     alert('Le champ est vide entrer un nombre compris entre 1 et 99')
     return;
   }

   if (guess.value > 99 || guess.value < 0 || guess.value == 0) {
     alert("Le nombre rentré ne fait pas partie de l'intervalle donné !");
     return;
   }

   if (nbrRandom == guess.value) {
    alert("Bravo ! Vous avez trouvé le nombre.");
  }

   if (nbrRandom < guess.value) {
     alert("Le nombre rentré est supérieur");
   } else if (nbrRandom > guess.value) {
     alert("Le nombre rentré est inférieur");
   }
 }
