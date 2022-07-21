let isInfinite = false;

function infiniteAnimation() {
  isInfinite = isInfinite ? false : true;

  if (isInfinite) {
    document.querySelectorAll('.load-bar').forEach(bar => {
      bar.style.animation = `load ${Math.random() * 3 + 2}s linear infinite`;
    });
  } else {
    document.querySelectorAll('.load-bar').forEach(bar => {
      bar.style.animation = '';
    });
  }
}

function hoverAnimation(e) {
  if (e.target.classList.contains('bar')) {
    if (!e.target.childNodes[1].classList.contains('animation')) {
      e.target.childNodes[1].classList.add('animation');

      setTimeout(() => {
        e.target.childNodes[1].classList.remove('animation');
      }, 3500);
    }
  } else if (e.target.classList.contains('load-bar')) {
    if (!e.target.classList.contains('animation')) {
      e.target.classList.add('animation');

      setTimeout(() => {
        e.target.classList.remove('animation');
      }, 3500);
    }
  }
}

document.body.addEventListener('mouseover', event => {
  if (!isInfinite) {
    hoverAnimation(event);
  }
});
