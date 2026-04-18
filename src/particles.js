/* ═══════════════════ PARTICLES ═══════════════════ */
function startParticles() {
    
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], petals = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Orb {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25 - 0.08;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
      const t = Math.random();
      if (t < 0.4)      this.color = `rgba(212,175,55,`;
      else if (t < 0.7) this.color = `rgba(147,51,234,`;
      else              this.color = `rgba(64,145,108,`;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      this.life++;
      if (this.life > this.maxLife || this.y < -10) this.reset();
    }
    draw() {
      const a = Math.sin((this.life / this.maxLife) * Math.PI) * 0.55;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + a + ')';
      ctx.fill();
    }
  }

  class Petal {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = -20 + Math.random() * H * 0.2;
      this.size = Math.random() * 5 + 2;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = Math.random() * 0.4 + 0.1;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.03;
      this.life = 0;
      this.maxLife = Math.random() * 500 + 300;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx + Math.sin(this.life * 0.02) * 0.3;
      this.y += this.vy;
      this.angle += this.spin;
      this.life++;
      if (this.y > H + 30 || this.life > this.maxLife) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity * Math.sin((this.life / this.maxLife) * Math.PI);
      ctx.fillStyle = '#d4af37';
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < 80; i++) {
      const o = new Orb(); o.life = Math.random() * o.maxLife;
      particles.push(o);
    }
    for (let i = 0; i < 18; i++) {
      const p = new Petal(); p.life = Math.random() * p.maxLife;
      petals.push(p);
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  init(); loop();
}

function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) {
    requestAnimationFrame(initParticles);
    return;
  }
  startParticles();
}

initParticles();

