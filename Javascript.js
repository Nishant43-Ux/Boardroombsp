const committees = document.querySelectorAll('.committee');

window.addEventListener('scroll', () => {
  committees.forEach((committee) => {
    const top = committee.offsetTop;
    const height = committee.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > top && scrollPosition < top + height) {
      committee.classList.add('active');
    } else {
      committee.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the modal box and the contact us button
  const modal = document.getElementById('contact-modal');
  const contactUsButton = document.querySelector('nav a.btn');
  const closeButton = document.querySelector('.close');

  // Set the initial display property of the modal box to none
  modal.style.display = 'none';

  // Function to show the modal box
  function showModal() {
    modal.style.display = 'block';
  }

  // Function to hide the modal box
  function hideModal() {
    modal.style.display = 'none';
  }

  // Add an event listener to the contact us button
  contactUsButton.addEventListener('click', () => {
    showModal();
    setTimeout(hideModal, 10000); // 10000 milliseconds = 10 seconds
  });

  // Add an event listener to the close button
  closeButton.addEventListener('click', hideModal);

  // Add an event listener to the modal box itself to close it when clicked outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
});

// JavaScript to toggle the menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const closeMenu = document.getElementById('close-menu');

// Toggle the menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active'); // Toggle menu button styles
    closeMenu.style.display = 'block'; // Show close button
});

// Close the menu when close button is clicked
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.classList.remove('active'); // Reset menu button styles
    closeMenu.style.display = 'none'; // Hide close button
});

console.log('Bhaichara established');