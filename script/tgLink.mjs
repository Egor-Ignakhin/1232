import env from './config.mjs';

const tg = document.querySelector('.telegram__button');

tg.setAttribute('href', env[3].tg);


try {
 const but = document.querySelector('.game__button');
 but.setAttribute('href', env[4].tg);
}
catch (e) {
 console.log(e);
}
