const loginValidation = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const maxLength = 500;

const textArea = document.getElementById('textarea');

const characters = document.getElementById('counter');

const charsCountDown = (event) => {
  const charsLength = event.target.value.length;
  const countDown = maxLength - charsLength;
  characters.innerText = countDown;
};

const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

const enableBtn = () => {
  submitButton.disabled = !agreement.checked;
};

window.onload = () => {
  const loginButton = document.querySelector('#login-button');
  loginButton.addEventListener('click', loginValidation);

  textArea.addEventListener('keyup', charsCountDown);

  agreement.addEventListener('change', enableBtn);
};

const getForm = document.getElementById('evaluation-form');
const getForm2 = document.getElementById('form-data');
const getName2 = document.getElementById('input-name2');
const getEmail2 = document.getElementById('input-email2');
const getHouse2 = document.getElementById('house2');
const getFamily2 = document.getElementById('label-family2');
const getContent2 = document.getElementById('label-content2');
const getRate2 = document.getElementById('label-rate2');
const labelTextArea = document.getElementById('labelTextArea');

const dados = {};

const inputName = document.getElementById('input-name');
inputName.addEventListener('change', (event) => {
  dados.firstName = event.target.value;
});

const inputLastName = document.getElementById('input-lastname');
inputLastName.addEventListener('change', (event) => {
  dados.lastName = event.target.value;
});

const inputEmail = document.getElementById('input-email');
inputEmail.addEventListener('change', (event) => {
  dados.Email = event.target.value;
});

const inputHouse = document.getElementById('house');
inputHouse.addEventListener('change', (event) => {
  dados.House = event.target.value;
});

const inputFamily = document.getElementById('section-family');
inputFamily.addEventListener('change', (event) => {
  dados.Family = event.target.value;
});

const skills = [];
const mySkills = {};
const materias = () => {
  const result = Object.entries(mySkills).sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  }).map((e) => e[1]).join(', ');
  return result;
};

const inputContent = document.getElementById('section-content');
inputContent.addEventListener('change', (event) => {
  skills.push(event.target.value);
  Object.assign(mySkills, skills);
});

const inputRate = document.getElementById('section-rate');
inputRate.addEventListener('change', (event) => {
  dados.Avaliação = event.target.value;
});

const divTextArea = document.getElementById('div-textarea');
divTextArea.addEventListener('change', (event) => {
  dados.Comentário = event.target.value;
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (evt) => {
  getForm.style.display = 'none';
  getForm2.style.display = 'flex';
  getName2.innerText = `Nome: ${dados.firstName} ${dados.lastName}`;
  getEmail2.innerText = `Email: ${dados.Email}`;
  getHouse2.innerText = `Casa: ${dados.House}`;
  getFamily2.innerText = `Família: ${dados.Family}`;
  getContent2.innerText = `Matérias: ${materias()}`;
  getRate2.innerText = `Avaliação: ${dados.Avaliação}`;
  labelTextArea.innerHTML = `Observações: ${dados.Comentário}`;
  evt.preventDefault();
});
