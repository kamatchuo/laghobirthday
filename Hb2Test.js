const sunflower = document.querySelector('.show-photos-sunflower');
const body = document.body;

const photoGroups = [
    { photos: ['ro2.jpg', 'ro4.jpg', 'ro7.jpg', 'ro11.jpg'], description: 'Your selfies.' },
    { photos: ['ro1.jpg', 'ro26.jpg'], description: 'My favourite mini doctor.' },
    { photos: ['ro6.jpg', 'ro9.jpg', 'ro17.jpg', 'ro25.jpg', 'ro22.jpg', 'ro5.jpg'], description: 'When I take pictures of you.' },
    { photos: ['ro21.jpg', 'ro16.jpg'], description: 'The most beautiful even without makeup.' },
    { photos: ['ro12.jpg', 'ro18.jpg', 'ro19.jpg', 'ro20.jpg'], description: 'Your mirror pics and outfits.' },
    { photos: ['ro3.jpg', 'ro8.jpg', 'ro13.jpg', 'ro14.jpg', 'ro3.jpg'], description: 'YOU tout court.'  },
];

let currentGroupIndex = 0;

// Préparer les positions fixes
const positions = [
    { top: '10%', left: '10%' }, // Haut gauche
    { top: '5%', left: '70%' }, // Haut droite
    { top: '70%', left: '10%' }, // Bas gauche
    { top: '70%', left: '60%' }, // Bas droite
    { top: '40%', left: '60%' }, // Centre
    { top: '40%', left: '20%' }, // Centre
];

sunflower.addEventListener('click', () => {
    if (currentGroupIndex >= photoGroups.length) {
        showFinalMessage();
        return;
    }

    displayGroup(photoGroups[currentGroupIndex], positions[currentGroupIndex]);
    currentGroupIndex++;
});

function displayGroup(group, position) {
    const groupContainer = document.createElement('div');
    groupContainer.style.position = 'absolute';
    groupContainer.style.padding = '10px';
    groupContainer.style.background = '#ffebc3';
    groupContainer.style.borderRadius = '8px';
    groupContainer.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    groupContainer.style.zIndex = '5';

    // Ajouter les images
    group.photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '80px';
        img.style.margin = '5px';
        groupContainer.appendChild(img);
    });

    // Ajouter la description
    const description = document.createElement('div');
    description.textContent = group.description;
    description.style.marginTop = '10px';
    description.style.fontSize = '14px';
    description.style.color = '#333';
    description.style.textAlign = 'center';

    groupContainer.appendChild(description);

    // Appliquer la position fixe au conteneur
    groupContainer.style.top = position.top;
    groupContainer.style.left = position.left;

    body.appendChild(groupContainer);
}

function showFinalMessage() {
    const message = document.createElement('div');
    message.classList.add('final-message');
    message.textContent = "Je t'aime dans tous tes états ❤️";

    message.style.position = 'fixed';
    message.style.top = '35%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '24px';
    message.style.color = '#8B4B65';
    message.style.background = '#ffebc3';
    message.style.padding = '20px';
    message.style.border = '2px solid #8B4B65';
    message.style.borderRadius = '10px';
    message.style.textAlign = 'center';
    message.style.zIndex = '10';

    body.appendChild(message);
}

