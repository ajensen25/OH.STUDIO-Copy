import experience from './data/experience.js';

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
    
  `
};

const experienceGrid = document.querySelector('.js-experience-grid');

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


// const content = document.querySelector('.js-content');
// content.innerHTML = HTML.homeHTML;