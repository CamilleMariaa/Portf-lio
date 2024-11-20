const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    console.log('OK');
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
   menuHamburguer.classList.toggle('change');

   if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block'
   } else {
    nav.style.display = 'none'
   }
}
// var button = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     var btn = document.getElementById('.btn');
//     services.classList.toggle('active');
// });