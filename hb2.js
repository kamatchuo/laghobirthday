const envelope = document.querySelector('.envelope-wrapper');
const photos = [
    'ro1.jpg',
    'ro2.jpg',
    'ro3.jpg',
    'ro4.jpg',
    'ro5.jpg',
    'ro6.jpg',
    'ro7.jpg',
    'ro8.jpg',
    'ro9.jpg',
    'ro10.jpg',
    'ro11.jpg',
    'ro12.jpg',
    'ro13.jpg',
'ro14.jpg',
'ro15.jpg',
    // Ajoutez d'autres images si nécessaire
];

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap'); // Basculer l'animation de l'enveloppe
    displayPhotos(); // Afficher les photos
});

function displayPhotos() {
    const body = document.body;
    photos.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src; // Définir la source de l'image
        img.classList.add('photo'); // Ajouter la classe pour le style
        img.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
        img.style.top = Math.random() * 100 + 'vh'; // Position verticale aléatoire
        body.appendChild(img); // Ajouter l'image au corps
        setTimeout(() => {
            img.classList.add('show'); // Montrer l'image après un délai
        }, index * 100); // Décalage entre les apparitions
    });
}