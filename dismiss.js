const  button = document.querySelector('#btn');

const emailValue = window.sessionStorage.getItem('emailValue');

document.querySelector('.span').innerText = emailValue;

button.addEventListener('click', (e)=> {
    e.preventDefault();
    
    let url = '/index.html';
    window.location.href = url
})