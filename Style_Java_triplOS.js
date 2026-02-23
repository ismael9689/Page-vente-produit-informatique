
//----------------------Constante du panier----------------------
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const clearCartButton = document.getElementById('clear-cart');

    let cart = [];
    let total = 0;


//----------------------Ajouter un article au panier----------------------
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));

            cart.push({ name, price });
            total += price;

            const li = document.createElement('li');
            li.textContent = `${name} - ${price}€`;
            cartItemsList.appendChild(li);

            totalSpan.textContent = `${total}€`;

            if (cart.length > 0) {
                checkoutButton.disabled = false; // Activer le bouton "Passer aux paiements"
            }
        });
    });


//----------------------Vider le panier----------------------
    clearCartButton.addEventListener('click', () => {
        cart = []; // Réinitialiser le tableau du panier
        total = 0; // Réinitialiser le total

        cartItemsList.innerHTML = ''; // Vider l'affichage des articles
        totalSpan.textContent = '0€'; // Mettre à jour le total

        checkoutButton.disabled = true; // Désactiver le bouton "Passer aux paiements"
    });


//----------------------Passer à la caisse----------------------
    checkoutButton.addEventListener('click', () => {
        alert('Passage à la caisse...');
        cart = [];
        total = 0;
        cartItemsList.innerHTML = '';
        totalSpan.textContent = '0€';
        checkoutButton.disabled = true;
    });
});


//----------------------MODE SOMBRE et CLAIR----------------------
  function setMode(oEvent){
  document.body.classList.replace(aModes[Number(!this.checked)],aModes[Number(this.checked)]);
  localStorage.setItem('mode',aModes[Number(this.checked)]);
  this.parentNode.nextElementSibling.innerHTML = (this.checked)? "Dark mode":"White mode"
  }
  
  function loadMode(){
  let sMode = localStorage.getItem('mode');
  document.forms["mytheme"]["theme-mode"].checked = sMode == aModes[1];
  setMode.call(document.forms["mytheme"]["theme-mode"])
  }
  let aModes = ["mode-white", "mode-dark"];
  document.addEventListener('DOMContentLoaded',function(){
  document.body.classList.add(aModes[0]);
  document.forms["mytheme"]["theme-mode"].addEventListener('click', setMode);
  loadMode()
  });

 
//----------------------AVIS CLIENT----------------------
 document.getElementById('reviewForm').addEventListener('submit', function(event) {
 event.preventDefault();

  
//----------------------Récupérer les valeurs du formulaire----------------------
  const name = document.getElementById('name').value;
  const reviewText = document.getElementById('review').value;
  const rating = document.getElementById('rating').value;


//----------------------Créer un nouvel avis----------------------
  const newReview = document.createElement('div');
  newReview.classList.add('review-card');
 

//----------------------Créer le contenu de l'avis----------------------
  const reviewHeader = document.createElement('div');
  reviewHeader.classList.add('review-header');
  
  const avatar = document.createElement('img');
  avatar.classList.add('review-avatar');
  avatar.src = 'https://img.lemde.fr/2017/09/14/78/0/530/530/664/0/75/0/b1cc6f0_11665-1ccfe6c.e9jduqh0k9.jpg';  // Utilisez une image par défaut si vous le souhaitez
  
  const nameElement = document.createElement('h3');
  nameElement.textContent = name;
  
  reviewHeader.appendChild(avatar);
  reviewHeader.appendChild(nameElement);
  
  const reviewTextElement = document.createElement('p');
  reviewTextElement.classList.add('review-text');
  reviewTextElement.textContent = `"${reviewText}"`;
  
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');
  ratingElement.textContent = '⭐'.repeat(rating);
 

//----------------------Ajouter le nouvel avis au conteneur des avis----------------------
  newReview.appendChild(reviewHeader);
  newReview.appendChild(reviewTextElement);
  newReview.appendChild(ratingElement);
 

//----------------------Ajouter le nouvel avis en haut de la liste----------------------
  document.querySelector('.review-container').prepend(newReview);
 

//----------------------Réinitialiser le formulaire----------------------
  document.getElementById('reviewForm').reset();
  });


//----------------------barre de recherche----------------------

  function filterList() {
    // Récupérer l'élément de recherche et la valeur saisie
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('#resultList li');
 
   
//----------------------Filtrer les éléments de la liste----------------------
    listItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            item.style.display = 'block';  // Afficher l'élément si correspondance
        } else {
            item.style.display = 'none';   // Masquer l'élément sinon
        }
    });



}
 