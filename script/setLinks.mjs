import env from './config.mjs';

const footer = document.querySelectorAll('.footer__list-item a');
const email = document.querySelector('.footer__list-item-text span')

footer.forEach((el, index) => {
    el.setAttribute('href', env[0].values[index]);
});

email.textContent = env[2].email