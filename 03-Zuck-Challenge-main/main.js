const botaoTipos = document.getElementById('tipos');
const botaoTestes = document.getElementById('testes');
const botaoSolucao = document.getElementById('solucao');
const tiposDoenca = document.querySelectorAll('#first-section');

botaoTipos.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected')
    }
    tiposDoenca[2].classList.add('selected');
});

botaoTestes.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected')
    }
    tiposDoenca[3].classList.add('selected');
});

botaoSolucao.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected')
    }
    for (let i = 5; i <= 7; i += 1) {
        tiposDoenca[i].classList.add('selected');
    }
});
