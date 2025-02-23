import experience from './data/experience.js';
import clients from './data/clients.js';

const HTML = {
  homeHTML: 
  `
    <section class="title-section">
      <h1>A brand and product designer working with clients globally</h1>
      <div class="title-wrapper">
        <p>Expertise</p>
        <p class="wrapper-highlight">Branding</p>
        <p class="wrapper-highlight">Product</p>
        <p class="wrapper-highlight">Design Systems</p>
      </div>
    </section>

    <section class="thumbnail-section">
      <div class="thumbnail-grid">
        <a href="" class="grid-item-container">
          <p>Aire</p>
          <img src="assets/thumbnail1.jpg.avif" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a href="" class="grid-item-container">
          <p>Correlated</p>
          <img src="assets/thumbnail2.jpg.webp" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>Channel 5</p>
          <img src="assets/thumbnail3.jpg.avif" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>Ronald Abram</p>
          <img src="assets/thumbnail4.jpg.avif" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>Propeller</p>
          <video autoplay loop muted class="grid-video grid-item">
            <source src="assets/video1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </a>
        <a class="grid-item-container">
          <p>Schuh</p>
          <img src="assets/thumbnail5.jpg.webp" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>Paperstreet</p>
          <img src="assets/thumbnail6.jpg.webp" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>OH.SUPPLY</p>
          <video autoplay loop muted class="grid-video grid-item">
            <source src="assets/video2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </a>
        <a class="grid-item-container">
          <p>Monokel Eyewear</p>
          <img src="assets/thumbnail7.jpg.avif" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
        <a class="grid-item-container">
          <p>Lawtrades</p>
          <img src="assets/thumbnail8.jpg.avif" alt="Thumbnail" class="grid-thumbnail grid-item">
        </a>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-title">
        <h2>Let's work together.</h2>
        <h2><a href="#">Get in touch.</a></h2>
      </div>
    </section>

    <footer>
      <div class="footer-left">
        <img src="assets/copyright.png" alt="Copyright">
        <p>&copy; Oil Harris 2023</p>
      </div>
      <nav class="footer-right">
        <ul class="footer-list">
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Mail</a></li>
        </ul>
      </nav>
    </footer>
  `,
  profileHTML:
  `
    <section class="title-section content-title-section">
      <h1>Hey 👋🏼 I'm Oli</h1>
    </section>

    <section class="thumbnail-section">
      <div class="thumbnail-grid">
        <a class="grid-item-container">
          <img src="assets/profile1.avif" alt="Oli" class="profile-grid-item">
        </a>
        <a class="grid-item-container">
          <img src="assets/profile2.webp" alt="Oli" class="profile-grid-item">
        </a>
      </div>
    </section>

    <section class="about-section">
      <div class="about-title">
        <p class="wrapper-highlight">About</p>
      </div>
      <div class="about-description">
        <p>A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</p>
      </div>
    </section>

    <section class="experience-section">
      <div class="experience-title">
        <p class="wrapper-highlight">Experience</p>
      </div>
      <div class="experience-description">
        <p>Where I've worked</p>
      </div>
    </section>

    <section class="experience-grid-section">
      <div class="experience-grid js-experience-grid">
        <div class="experience-cell">
          <p>2023 - Present</p>
          <h2>NativeState</h2>
          <p>Design Director</p>
          <p class="wrapper-highlight">Co-Founder</p>
        </div>
      </div>
    </section>

    <section class="client-section">
      <div class="client-title">
        <p class="wrapper-highlight">Clients</p>
      </div>
      <div class="client-description">
        <p>Who I've worked with</p>
      </div>
    </section>

    <section class="client-grid-section">
      <div class="client-grid js-client-grid">
        <div class="client-cell">
          <img src="assets/clients/eurosport.webp" alt="Eurosport">
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-title">
        <h2>Let's work together.</h2>
        <h2><a href="#">Get in touch.</a></h2>
      </div>
    </section>

    <footer>
      <div class="footer-left">
        <img src="assets/copyright.png" alt="Copyright">
        <p>&copy; Oil Harris 2023</p>
      </div>
      <nav class="footer-right">
        <ul class="footer-list">
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Mail</a></li>
        </ul>
      </nav>
    </footer>
  `,
  contactHTML: 
  `
  
  `
};

const content = document.querySelector('.js-content');

document.querySelectorAll('.js-navbar-button').forEach((button) => {
  button.addEventListener('click', () => {
    removeSelectedList();
    button.classList.add('selected-list');

    if (button.classList.contains('home')) {
      content.innerHTML = HTML.homeHTML;
    }
    else if (button.classList.contains('profile')) {
      content.innerHTML = HTML.profileHTML;
      generateProfileHTML();
    }
    else {
      content.innerHTML = HTML.contactHTML;
    }
  });
});

function removeSelectedList() {
  document.querySelectorAll('.js-navbar-button').forEach((button) => {
    button.classList.remove('selected-list');
  });
};

function generateProfileHTML() {
  const experienceGrid = document.querySelector('.js-experience-grid');
  console.log(experienceGrid);

  let experienceGridHTML = '';
  
  experience.forEach((job) => {
    experienceGridHTML += `
        <div class="experience-cell">
          <p>${job.duration}</p>
          <h2>${job.name}</h2>
          <p>${job.position}</p>
          <p class="wrapper-highlight">${job.type}</p>
        </div>
      `;
  });
  
  experienceGrid.innerHTML = experienceGridHTML;
  
  
  const clientGrid = document.querySelector('.js-client-grid');
  
  let clientGridHTML = '';
  
  clients.forEach((client) => {
    clientGridHTML += `
        <div class="client-cell">
          <img src="${client.img}" alt="${client.name}">
        </div>
      `
  });
  
  clientGrid.innerHTML = clientGridHTML;
};



content.innerHTML = HTML.homeHTML;