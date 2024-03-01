const  button = document.querySelector('#btn');

document.querySelector('.span').innerHTML = sessionStorage.getItem('emailValue');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    
    let url = '/index.html';
    window.location.href = url
})