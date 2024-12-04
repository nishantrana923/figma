const spots = document.getElementsByClassName('.spoti');

// Function to generate random positions for the logos
function randomPosition() {
  // Get random positions within the container
  const x = Math.floor(Math.random() * 500); // Random X between 0 and 500px
  const y = Math.floor(Math.random() * 250); // Random Y between 0 and 250px
  return { x, y };
}

// Loop through each logo and apply random positions
spots.forEach((spot, index) => {
  const { x, y } = randomPosition();
  
  // Apply the random position to each logo
  spot.style.left = `${x}px`;
  spot.style.top = `${y}px`;
});