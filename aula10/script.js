var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
a.addEventListener('mousemove', mover)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'blue'
    a.style.cursor = 'progress'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'gray'
    a.style.cursor = 'pointer'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}

function mover() {
    a.innerText = "Movendo!"
    a.style.background = 'purple'
    a.style.cursor = 'pointer'
}
