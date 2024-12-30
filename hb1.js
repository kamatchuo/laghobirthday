const envelope = document.querySelector('.envelope-wrapper');
const button = document.querySelector('.custom-button');

function toggleEnvelope() {
    envelope.classList.toggle('flap');
    button.textContent = envelope.classList.contains('flap') ? 'Close Letter' : 'Open Letter';
}

envelope.addEventListener('click', toggleEnvelope);
button.addEventListener('click', toggleEnvelope);

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



 
