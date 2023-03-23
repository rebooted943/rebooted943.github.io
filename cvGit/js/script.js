const toggleButton = document.getElementById('toggle-night-mode');
const pagElements = document.getElementById('cv');
const modNotte = document.getElementById('')

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('bg-gray-800');
  document.body.classList.toggle('text-teal-300');
  document.body.classList.toggle('bg-gray-300');
  document.body.classList.toggle('text-grey-600');


  pagElements.classList.toggle('bg-gray-300');
  pagElements.classList.toggle('text-teal-400');
  pagElements.classList.toggle('bg-gray-700');
  pagElements.classList.toggle('text-gray-100');
  
});