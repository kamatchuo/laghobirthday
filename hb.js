function showMessage() {
  // Hide the initial button and show the message
  document.querySelector('.button').style.display = 'none';
  document.body.classList.add('on');

  const message = document.getElementById('message');
  message.style.display = 'block';

  // Show the Celebrate button
  const celebrateButton = document.getElementById('celebrateButton');
  celebrateButton.style.display = 'block';

  // Trigger the animation by resetting the opacity
  message.style.opacity = 0; // Reset opacity
  message.offsetHeight; // Trigger reflow
  message.style.opacity = 1; // Animate to full opacity
}

// Function to generate more fireworks on the screen
function startFireworks() {
  const fireworksContainer = document.getElementById('fireworks-container');

  // Create 30 fireworks at random positions
  for (let i = 0; i < 30; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Set random position
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.left = `${Math.random() * 100}%`;

    fireworksContainer.appendChild(firework);

    // Remove firework after animation completes
    firework.addEventListener('animationend', () => {
      firework.remove();
    });
  }

  // Show the button to go to another page
  const anotherPageButton = document.getElementById('anotherPageButton');
  anotherPageButton.style.display = 'block';
}

// Function to navigate to another page
function goToAnotherPage() {
  window.location.href = 'hb1.html'; // Link to the new HTML page
}


  