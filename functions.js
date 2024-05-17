const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const msg = document.getElementById('msg');

  msg.innerHTML = 'Gracias!';

  form.reset();
})