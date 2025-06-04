const modeToggle = document.getElementById('mode-toggle');
   modeToggle.addEventListener('change', () => {
       document.body.classList.toggle('dark-mode');
   });

   const minimizeBtn = document.querySelector('.minimize-btn');
   const hamburger = document.querySelector('.hamburger');
   const navbar = document.querySelector('.navbar');

   minimizeBtn.addEventListener('click', () => {
       navbar.classList.toggle('minimized');
   });

   hamburger.addEventListener('click', () => {
       navbar.classList.toggle('open');
   });
