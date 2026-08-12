var x = 10;
// Aqui x é 10

{
  var x = 2;
  // Aqui x é 2
}

// Aqui x é 2
document.getElementById('demo').innerHTML = x;
