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