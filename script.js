const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// A light, short-lived sparkle trail follows the pointer on desktop.
const sparkleLayer = document.querySelector('.sparkle-layer');
let lastSparkle = 0;
window.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch') return;
  const now = performance.now();
  if (now - lastSparkle < 45) return;
  lastSparkle = now;
  const sparkle = document.createElement('i');
  sparkle.className = 'cursor-spark';
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  sparkle.style.setProperty('--dx', `${(Math.random() - .5) * 32}px`);
  sparkle.style.setProperty('--dy', `${(Math.random() - .5) * 32}px`);
  sparkleLayer.append(sparkle);
  window.setTimeout(() => sparkle.remove(), 720);
}, { passive: true });

// Reveal content gently as it enters the viewport.
const revealTargets = document.querySelectorAll('.section-heading, .about-body, .stat-row, .timeline-item, .project-card, .edu-card, .skill-group');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(element);
  });
}

// Lightweight canvas version of the classic endless runner.
const canvas = document.querySelector('#dino-canvas');
const ctx = canvas.getContext('2d');
const gameMessage = document.querySelector('#game-message');
const startButton = document.querySelector('#game-start');
const scoreOutput = document.querySelector('#game-score');
const bestOutput = document.querySelector('#game-best');
const gameNavLink = document.querySelector('.nav-links a[href="#games"]');
const width = canvas.width;
const height = canvas.height;
const groundY = 220;
const dino = { x: 76, y: groundY - 48, width: 44, height: 48, velocity: 0, jumping: false };
let obstacles = [];
let score = 0;
let speed = 6;
let nextObstacle = 590;
let running = false;
let frame = 0;
let lastFrame = 0;
let animationId = 0;
let best = 0;
try { best = Number(localStorage.getItem('sukran-dino-best') || 0); } catch (_) { /* Storage may be blocked in private mode. */ }
bestOutput.textContent = String(best).padStart(5, '0');

function drawCloud(x, y, scale = 1) {
  ctx.fillStyle = '#f3e5ec';
  ctx.beginPath();
  ctx.arc(x, y, 10 * scale, Math.PI, 0);
  ctx.arc(x + 12 * scale, y - 6 * scale, 13 * scale, Math.PI, 0);
  ctx.arc(x + 27 * scale, y, 9 * scale, Math.PI, 0);
  ctx.fill();
}

function drawDino() {
  const x = dino.x;
  const y = dino.y;
  ctx.fillStyle = '#443442';
  ctx.beginPath();
  ctx.moveTo(x + 5, y + 26); ctx.lineTo(x + 5, y + 17); ctx.lineTo(x + 12, y + 17);
  ctx.lineTo(x + 12, y + 9); ctx.lineTo(x + 20, y + 3); ctx.lineTo(x + 34, y + 3);
  ctx.lineTo(x + 34, y + 16); ctx.lineTo(x + 43, y + 16); ctx.lineTo(x + 43, y + 28);
  ctx.lineTo(x + 30, y + 28); ctx.lineTo(x + 25, y + 37); ctx.lineTo(x + 13, y + 37);
  ctx.lineTo(x + 13, y + 29); ctx.lineTo(x + 6, y + 34); ctx.lineTo(x, y + 30); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#fff9fb'; ctx.fillRect(x + 28, y + 8, 3, 3);
  ctx.fillStyle = '#d98aa8'; ctx.fillRect(x + 40, y + 21, 3, 2);
  const step = Math.floor(frame / 6) % 2;
  ctx.fillStyle = '#443442';
  if (dino.jumping) ctx.fillRect(x + 13, y + 36, 7, 10);
  else if (step) { ctx.fillRect(x + 13, y + 35, 6, 13); ctx.fillRect(x + 26, y + 35, 7, 9); }
  else { ctx.fillRect(x + 13, y + 35, 6, 9); ctx.fillRect(x + 26, y + 35, 7, 13); }
}

function drawCactus(obstacle) {
  const { x, height: h, width: w } = obstacle;
  ctx.fillStyle = '#829f88';
  ctx.fillRect(x + w * .36, groundY - h, w * .32, h);
  ctx.fillRect(x + w * .05, groundY - h * .58, w * .32, 6);
  ctx.fillRect(x + w * .05, groundY - h * .78, 6, h * .2);
  ctx.fillRect(x + w * .64, groundY - h * .72, w * .32, 6);
  ctx.fillRect(x + w * .86, groundY - h * .92, 6, h * .2);
}

function render() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fff8fb'; ctx.fillRect(0, 0, width, height);
  drawCloud(120 - (frame * .35) % 1020, 68, .8);
  drawCloud(510 - (frame * .22) % 1020, 104, .65);
  drawCloud(820 - (frame * .28) % 1020, 58, .72);
  ctx.strokeStyle = '#e8dce3'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, groundY + 1); ctx.lineTo(width, groundY + 1); ctx.stroke();
  ctx.fillStyle = '#e4d6df';
  for (let i = 0; i < 22; i++) {
    const x = (i * 57 - (frame * speed * .7) % 57 + width) % width;
    ctx.fillRect(x, groundY + 13 + (i % 3) * 5, i % 4 === 0 ? 8 : 4, 2);
  }
  drawDino();
  obstacles.forEach(drawCactus);
}

function showMessage(title, detail) {
  gameMessage.innerHTML = `<span class="game-message-icon">▸</span><strong>${title}</strong><span>${detail}</span>`;
  gameMessage.classList.remove('hidden');
}

function startGame() {
  cancelAnimationFrame(animationId);
  obstacles = [];
  score = 0;
  speed = 6;
  nextObstacle = 580;
  dino.y = groundY - dino.height;
  dino.velocity = 0;
  dino.jumping = false;
  running = true;
  lastFrame = 0;
  scoreOutput.textContent = '00000';
  gameMessage.classList.add('hidden');
  startButton.innerHTML = 'Yeniden başlat <span>↻</span>';
  animationId = requestAnimationFrame(tick);
}

function jump() {
  if (!running) { startGame(); return; }
  if (!dino.jumping) {
    dino.velocity = -13;
    dino.jumping = true;
  }
}

function finishGame() {
  running = false;
  cancelAnimationFrame(animationId);
  const finalScore = Math.floor(score);
  if (finalScore > best) {
    best = finalScore;
    bestOutput.textContent = String(best).padStart(5, '0');
    try { localStorage.setItem('sukran-dino-best', String(best)); } catch (_) { /* Keep the score for this session. */ }
  }
  showMessage('Oyun bitti!', `Skorun ${String(finalScore).padStart(5, '0')} · Tekrar oynamak için zıpla veya düğmeye bas.`);
  startButton.innerHTML = 'Tekrar oyna <span>↻</span>';
  render();
}

function tick(timestamp) {
  const delta = lastFrame ? Math.min((timestamp - lastFrame) / 16.67, 2) : 1;
  lastFrame = timestamp;
  frame += delta;
  score += delta * speed * .11;
  speed = 6 + Math.min(score / 450, 5);
  scoreOutput.textContent = String(Math.floor(score)).padStart(5, '0');

  dino.y += dino.velocity * delta;
  if (dino.jumping) {
    dino.velocity += .68 * delta;
    if (dino.y >= groundY - dino.height) {
      dino.y = groundY - dino.height;
      dino.velocity = 0;
      dino.jumping = false;
    }
  }

  nextObstacle -= speed * delta;
  if (nextObstacle <= 0) {
    const obstacleHeight = 33 + Math.random() * 20;
    obstacles.push({ x: width + 5, width: 28, height: obstacleHeight });
    nextObstacle = 360 + Math.random() * 310;
  }
  obstacles.forEach((obstacle) => { obstacle.x -= speed * delta; });
  obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);

  const hit = obstacles.some((obstacle) =>
    dino.x + dino.width - 8 > obstacle.x + 3 && dino.x + 8 < obstacle.x + obstacle.width - 3 &&
    dino.y + dino.height - 2 > groundY - obstacle.height + 4
  );
  render();
  if (hit) { finishGame(); return; }
  animationId = requestAnimationFrame(tick);
}

startButton.addEventListener('click', startGame);
canvas.addEventListener('pointerdown', jump);
gameNavLink.addEventListener('click', startGame);
window.addEventListener('keydown', (event) => {
  if ((event.code === 'Space' || event.code === 'ArrowUp') && !event.repeat) {
    if (event.target instanceof HTMLButtonElement) return;
    event.preventDefault();
    jump();
  }
});
render();

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const sender = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const composeUrl = new URL('https://mail.google.com/mail/');
  composeUrl.searchParams.set('view', 'cm');
  composeUrl.searchParams.set('fs', '1');
  composeUrl.searchParams.set('to', 'sukranyilmaz1144@gmail.com');
  composeUrl.searchParams.set('su', `Web sitesi iletişim formu — ${name}`);
  composeUrl.searchParams.set('body', `${message}\n\n---\nGönderen: ${name}\nE-posta: ${sender}`);
  const composeWindow = window.open(composeUrl.toString(), '_blank');
  if (composeWindow) composeWindow.opener = null;
  else window.location.href = composeUrl.toString();
});
