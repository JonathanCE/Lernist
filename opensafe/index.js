const loginOption = document.querySelector('#login-option');
const registerOption = document.querySelector('#register-option');

const loginContainer = document.querySelector('#login-container');
const registerContainer = document.querySelector('#register-container');

loginOption.addEventListener('click', (e) => {
    loginContainer.style.display = 'block';
    registerContainer.style.display = 'none';
    scrollTo(0, 280);
})

registerOption.addEventListener('click', (e) => {
    registerContainer.style.display = 'block';
    loginContainer.style.display = 'none';
    scrollTo(0, 280);
})