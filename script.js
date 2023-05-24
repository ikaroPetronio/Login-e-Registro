const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const btnclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

btnclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
