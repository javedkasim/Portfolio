// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Nav scroll
const nav = document.querySelector('.nav');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  toTop.classList.toggle('show', window.scrollY > 600);
});

// Burger
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Active link on scroll
const links = document.querySelectorAll('#menu a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (sec && sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});

// Typed text
const phrases = ['scalable web apps.', 'beautiful interfaces.', 'data dashboards.', 'mobile experiences.', 'pixel-perfect designs.'];
const typed = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;
function tick() {
  const word = phrases[pi];
  typed.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; setTimeout(tick, 80); }
  else if (deleting && ci > 0) { ci--; setTimeout(tick, 40); }
  else {
    deleting = !deleting;
    if (!deleting) pi = (pi + 1) % phrases.length;
    setTimeout(tick, deleting ? 1200 : 300);
  }
}
tick();

// Skills
const skills = ['Figma','Canva','Webflow','HTML/CSS','Bootstrap','TailwindCSS','JavaScript','GSAP','WordPress','React.js','Next.js','React Native','Node.js','Express.js','MySQL','MongoDB','PostgreSQL','Python','Pandas','NumPy','Seaborn','Matplotlib','Power BI','Tableau','Jupyter','GitHub','FastAPI','Flask','Django','Laravel','SQL','OpenCV'];
const skillCloud = document.getElementById('skillCloud');
skills.forEach(s => {
  const el = document.createElement('span');
  el.className = 'pill';
  el.textContent = s;
  skillCloud.appendChild(el);
});


// Services
const services = [
  {icon:'assets/img/Services/1.png', title:'No-Code Platforms', desc:'Webflow, Figma-to-Code, Dora — rapid websites with rich animation and interaction.'},
  {icon:'assets/img/Services/6.png', title:'Frontend Development', desc:'HTML, CSS, JS, Tailwind, React.js & Next.js — fast, responsive, accessible UIs.'},
  {icon:'assets/img/Services/3.png', title:'Data Analytics', desc:'Python, Pandas, SQL, Power BI & Tableau — clean dashboards and actionable insights.'},
  {icon:'assets/img/Services/4.png', title:'Backend Development', desc:'PHP, Laravel, Node.js, MySQL & REST APIs — secure, scalable services.'},
  {icon:'assets/img/Services/5.png', title:'Mobile Apps', desc:'React Native cross-platform apps with modern UI, auth & API integration.'},
  {icon:'assets/img/Services/2.png', title:'Graphic Design', desc:'Branding, social, marketing & web visuals with Photoshop, Illustrator & Canva.'}
];
const sg = document.getElementById('servicesGrid');
services.forEach(s => {
  sg.insertAdjacentHTML('beforeend', `
    <article class="svc">
      <div class="svc-icon"><img src="${s.icon}" alt=""/></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </article>`);
});



// Projects
const projects = [
  '<a href="https://javedkasim.github.io/Portfolio/" target="_blank">My Portfolio</a>',
  '<a href="https://rajbhogkhana.com/" target="_blank">Rajbhog Khan</a>',
  '<a href="https://www.google.com" target="_blank">My Purva Bharat Sthnakwasi Jain Sangh</a>',
  '<a href="https://purvabharatsthnakwasijainsangh.in/" target="_blank">My Portfolio</a>',
  '<a href="https://javedkasim.github.io/Gsap/" target="_blank">Gsap Animation</a>',
  '<a href="https://kkphotostudio.in/velnox/" target="_blank">Velnox</a>',
  '<a href="https://kkphotostudio.in/kk/" target="_blank">KK Photo Studio</a>',
  '<a href="https://kkphotostudio.in/branding/3/" target="_blank">Branding Website</a>',
  '<a href="https://kkphotostudio.in/branding/4/" target="_blank">Branding Website</a>',
  '<a href="https://admitrixsolutions.in/" target="_blank">Admitrix Solutions</a>',
  '<a href="https://inrizq.com/index" target="_blank">Inrizq</a>',
  '<a href="https://inrizq.com/admin_panel" target="_blank">Admin Panel</a>',
  '<a href="https://mountjack.com/home" target="_blank">Mount Jack</a>',
  '<a href="https://luckycarecharitabletrust.in/aurum/" target="_blank">Aurum</a>',
  '<a href="https://luckycarecharitabletrust.in/index-new.html" target="_blank">Lucky Care Charitable Trust</a>',
  '<a href="https://luckycarecharitabletrust.in/pending/landing/" target="_blank">Landing Page</a>',
  '<a href="https://luckycarecharitabletrust.in/pending/model/" target="_blank">All India Service</a>',
  '<a href="https://kkphotostudio.in/branding/6/" target="_blank">Branding Website</a>',
  '<a href="https://github.com/javedkasim/Tableau_Project" target="_blank">Data Analyst Project</a>',

];

projects.forEach(p => {
  const el = document.createElement('span');
  el.className = 'pill';
  el.innerHTML = p; // textContent nahi
  projectCloud.appendChild(el);
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Counters
const counters = document.querySelectorAll('.stat h3');
const co = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count;
    let n = 0; const step = Math.max(1, Math.ceil(target / 40));
    const iv = setInterval(() => {
      n += step; if (n >= target) { n = target; clearInterval(iv); }
      el.textContent = n + '+';
    }, 30);
    co.unobserve(el);
  });
});
counters.forEach(c => co.observe(c));

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').textContent = '✓ Message sent! I will get back to you soon.';
  e.target.reset();
  setTimeout(() => document.getElementById('formMsg').textContent = '', 5000);
});
