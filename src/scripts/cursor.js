let dot, aura, qi, main, burst;

function initCursor() {
    const root = document.getElementById('cursor-root');
    dot = document.getElementById('cursor-dot');
    aura = document.getElementById('cursor-aura');
    qi = document.getElementById('cursor-qi');
    main = document.getElementById('cursor-main');
    burst = document.getElementById('cursor-burst');

    if (!dot) {
        requestAnimationFrame(initCursor);
        return;
    }

    startCursor();
}

initCursor();

function startCursor() {
    /* ═══════════════════ XIANXIA CUSTOM CURSOR ═══════════════════ */
    const root = document.getElementById('cursor-root');
    const dot = document.getElementById('cursor-dot');
    const aura = document.getElementById('cursor-aura');
    const qi = document.getElementById('cursor-qi');
    const main = document.getElementById('cursor-main');
    const burst = document.getElementById('cursor-burst');

    let mx = -200, my = -200; // current mouse
    let ax = -200, ay = -200; // aura (lagged)
    let qx = -200, qy = -200; // qi (more lagged)
    let trailTimer = 0;

    // Move root to exact mouse pos (instant)
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;

        // Spawn trail particle
        trailTimer++;
        if (trailTimer % 4 === 0) spawnTrail(mx, my);
    });

    // Hover detection
    const hoverTargets = 'a, button, .hero-card, .feat-card, .art-item, .qs-item, .select-btn, .jade-btn, input, textarea';
    document.addEventListener('mouseover', e => {
        if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
    });

    // Click burst
    document.addEventListener('mousedown', () => {
        burst.classList.remove('fire');
        void burst.offsetWidth; // reflow
        burst.classList.add('fire');
    });

    // Animate loop — dot is instant, aura lags, qi lags more
    function tick() {
        // Dot: instant snap
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        main.style.left = mx + 'px';
        main.style.top = my + 'px';
        burst.style.left = mx + 'px';
        burst.style.top = my + 'px';

        // Aura: lerp toward mouse
        ax += (mx - ax) * 0.18;
        ay += (my - ay) * 0.18;
        aura.style.left = ax + 'px';
        aura.style.top = ay + 'px';

        // Qi: slower lerp
        qx += (mx - qx) * 0.07;
        qy += (my - qy) * 0.07;
        qi.style.left = qx + 'px';
        qi.style.top = qy + 'px';

        requestAnimationFrame(tick);
    }
    tick();

    // Trail spark
    function spawnTrail(x, y) {
        const colors = [
            'rgba(212,175,55,0.6)',
            'rgba(147,51,234,0.5)',
            'rgba(64,145,108,0.5)',
            'rgba(240,201,69,0.4)'
        ];
        const el = document.createElement('div');
        el.className = 'cursor-trail';
        const size = Math.random() * 5 + 2;
        const offset = 10;
        el.style.cssText = `
      left: ${x + (Math.random() - 0.5) * offset}px;
      top:  ${y + (Math.random() - 0.5) * offset}px;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      box-shadow: 0 0 ${size * 2}px ${colors[0]};
    `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 600);
    }

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => { root.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { root.style.opacity = '1'; });
}

