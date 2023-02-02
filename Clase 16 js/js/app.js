if (!localStorage.getItem('userLog')) {
  window.location = './login.html';
}

const userLog = JSON.parse(localStorage.getItem('userLog'));

const saludar = () => {
  const saludo = document.createElement('h1');
  saludo.innerText = `Bienvenido ${userLog.name} ${userLog.lastName}!`;
  saludo.classList = 'text-light';
  document.getElementById('miDiv').appendChild(saludo);
};
saludar();

const closeSesion = () => {
  localStorage.clear();
  window.location = './login.html';
};