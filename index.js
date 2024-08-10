/*Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
Вивести зображення, отримане випадковим чином (Math.random)*/

const images = [
    'assets/image1.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg',
    'assets/image7.jpg',
    'assets/image8.jpg',
    'assets/image9.jpg'
];

const button = document.getElementById('button');
const image = document.getElementById('randomImage');

button.addEventListener('click', () => {

   const randomImage = Math.floor(Math.random() * images.length);

   image.src = images[randomImage];
});