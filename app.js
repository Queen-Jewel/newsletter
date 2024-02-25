const button = document.querySelector('#btn');

button.addEventListener('click', (e)=> {
    e.preventDefault();

 const validEmail = document.querySelector('.valid');
 const email = document.querySelector('.mail');
//  const showValid = document.querySelector('.show');
 let url = '/success.html';

 let success = ()=> {
    const emailValue = email.value;


    if(!/@/.test(emailValue) || !emailValue){
        validEmail.classList.remove('hidden');
        email.style.border ='1px solid #d3a5a4'
        email.style.backgroundColor ='#ffe8e6'
        email.style.color = '#d57473'
    }else {
    window.location.href = url;
 }
 }

 success();
})