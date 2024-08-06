import env from './config.mjs';

const burderLink = document.querySelectorAll('.burder__list-item a')[0];

burderLink.setAttribute('href', env[1].game);

console.log(env[1].game)