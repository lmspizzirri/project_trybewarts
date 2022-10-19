const buttonsubmit = document.getElementById('submit-btn');
const button = document.getElementById('button');
buttonsubmit.disabled = true;
console.log(button);
button.addEventListener('click', () => {
  const email = document.forms.form.email.value;
  const senha = document.forms.form.password.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    buttonsubmit.disabled = false;
  } else {
    buttonsubmit.disabled = true;
  }
});
