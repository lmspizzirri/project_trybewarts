const button = document.getElementById('button');
console.log(button)
button.addEventListener('click', function() {
  const email = document.forms['form'].email.value;
  const senha = document.forms['form'].password.value;
  if (email === 'tryber@teste.com' && senha === '123456'){
    alert('Olá, Tryber!')
  }
    else {
      alert('Email ou senha inválidos.')
    }
});