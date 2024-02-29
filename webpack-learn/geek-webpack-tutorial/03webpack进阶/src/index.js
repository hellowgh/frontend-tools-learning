import image from './imags/Snipaste_2024-02-23_20-11-17.png'

console.log(4423423, image);

const img = document.createComment('img');

img.src = image;

const body = document.querySelector('body');

body.appendChild(img);