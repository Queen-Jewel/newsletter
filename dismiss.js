const  button = document.querySelector('#btn');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    
    let url = '/index.html';
    window.location.href = url
})