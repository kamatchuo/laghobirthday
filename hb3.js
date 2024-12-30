document.addEventListener('DOMContentLoaded', () => {
    const messageCards = document.querySelectorAll('.message-card');

    // Ajouter un délai pour chaque carte
    messageCards.forEach((card, index) => {
        setTimeout(() => {
            card.querySelector('.message-content').classList.add('visible');
        }, index * 500); // Un délai de 500ms entre chaque message
    });
});
