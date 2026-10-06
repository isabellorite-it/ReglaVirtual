(function () {
  const id = 'virtual-ruler';
  const old = document.getElementById(id);

  if (old) {
    old.remove();
    localStorage.removeItem(id);
    return;
  }

  const r = document.createElement('div');
  r.id = id;
  r.style.position = 'fixed';
  r.style.top = localStorage.getItem(id) || '50%';
  r.style.left = '50%';
  r.style.transform = 'translateX(-50%)';
  r.style.width = '99%';
  r.style.height = '60px';
  r.style.background = 'rgba(100,181,246,0.4)';
  r.style.backdropFilter = 'blur(8px)';
  r.style.borderTop = '2px solid rgba(0,0,0,0.6)';
  r.style.borderBottom = '2px solid rgba(0,0,0,0.6)';
  r.style.borderRadius = '20px';
  r.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
  r.style.zIndex = 9999;
  r.style.cursor = 'ns-resize';
  r.style.userSelect = 'none';
  r.style.font = '10px monospace';
  r.style.color = 'black';
  r.style.display = 'flex';
  r.style.alignItems = 'flex-start';
  r.style.justifyContent = 'space-between';
  r.style.padding = '0 10px';

  const numMarks = 20;

  for (let i = 0; i <= numMarks; i++) {
    const mark = document.createElement('div');
    mark.style.width = '2px';
    mark.style.height = (i % 5 === 0 ? 25 : 15) + '%';
    mark.style.background = 'rgba(0,0,0,0.3)';
    mark.style.display = 'inline-block';
    mark.style.position = 'relative';
    mark.style.marginTop = '0';

    if (i % 5 === 0) {
      const label = document.createElement('span');
      label.innerText = i;
      label.style.position = 'absolute';
      label.style.top = '100%';
      label.style.left = '50%';
      label.style.transform = 'translateX(-50%)';
      label.style.fontSize = '9px';
      label.style.opacity = '0.7';
      mark.appendChild(label);
    }

    r.appendChild(mark);
  }

  document.body.appendChild(r);

  let moving = false;

  r.addEventListener('click', () => {
    moving = !moving;
    if (!moving) localStorage.setItem(id, r.style.top);
  });

  window.addEventListener('mousemove', e => {
    if (!moving) return;

    let n = e.clientY - 30;
    if (n < 0) n = 0;
    if (n > window.innerHeight - 60) n = window.innerHeight - 60;

    r.style.top = n + 'px';
  });
})();
