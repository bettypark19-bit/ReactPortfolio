1. HTML: 
<div class="container">

  <h1 class="title" data-splitting>Splitting</h1>

  <div class="dot">
    <div class="dot-inner">
      <svg class="dot-wave background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
      </svg>
      <svg class="dot-wave foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
      </svg>
    </div>
  </div>
</div>

<a href="https://youtu.be/hVqCPXzD_hA" target="_blank" data-keyframers-credit style="color: #FFF"></a>
<script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

2. CSS:

@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap");

:root {
  --duration: 6s;
  --wave-duration: calc(var(--duration) * 0.25);
  --text-in-delay: calc(var(--duration) * 0.275);
  --text-in-duration: calc(var(--duration) * 0.1);
  --easing: cubic-bezier(0.5, 0, 0.5, 1);
  --dot-color: #ffd950;
  --dot-color-dark: #977a12;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #060506;
  color: white;
  font-family: "Heebo", sans-serif;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  align-items: center;
  justify-items: center;
  > * {
    grid-area: 1 / 1;
  }
}

.title {
  font-size: 10vmin;
  margin: 0;
}

.title .char {
  --delay: calc(var(--text-in-delay) + (0.25s * (1 - var(--distance-percent))));

  animation: text-in var(--text-in-duration) var(--easing) var(--delay)
    backwards;
  transform-origin: center 1em;

  @keyframes text-in {
    0% {
      opacity: 0;
      transform: translateX(calc(-0.4em * var(--char-offset))) scale(0);
    }
    90% {
      transform: translateX(0em) scale(1.1);
    }
  }

  &[data-char="t"],
  &[data-char="i"] {
    visibility: hidden;
    --squish-scale: 0.6;
    --squish-y: 10%;

    &:before {
      animation: text-squish var(--duration) var(--easing) forwards;
      visibility: visible;
      transform-origin: center 1em;
    }
  }

  &[data-char="i"] {
    --squish-scale: 0.9;
    --squish-y: 5%;
  }

  @keyframes text-squish {
    47.5%,
    52.5% {
      transform: none;
    }
    50% {
      transform: translateY(calc(var(--squish-y) * 1))
        scaleY(calc(var(--squish-scale) * 1));
    }
  }

  &:last-child {
    animation: text-in var(--text-in-duration) var(--easing) var(--delay)
        backwards,
      text-bonk var(--duration) var(--easing) forwards; // calc(var(--text-in-duration) + var(--delay));
  }

  @keyframes text-bonk {
    80%,
    85%,
    to {
      transform: none;
    }
    82% {
      transform: translateX(-20%);
    }
  }
}

.dot {
  font-size: 5vmin;
  width: 1em;
  height: 1em;
  animation: dot var(--duration) var(--easing) both;
}

.dot-inner {
  animation: dot-inner var(--duration) var(--easing) both;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  //background: var(--dot-color);
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  > * {
    grid-area: 1 / 1;
  }
}

.dot-wave {
  width: 200%;
  height: 200%;
  fill: var(--dot-color);

  animation: wave-in var(--wave-duration) var(--easing);

  --offset-x: -110%;

  @keyframes wave-in {
    0% {
      transform: translateY(100%) translateX(var(--offset-x));
    }
    70% {
      transform: translateY(30%) translateX(0%);
    }
  }

  &.background {
    fill: var(--dot-color-dark);
    animation-duration: calc(0.95 * var(--wave-duration));
    --offset-x: 110%;
  }
}

@keyframes dot {
  // 10% fade in
  // 20% shoot up
  // 30% bounce down
  // 40% shoot up
  // 50% bounce down
  // 60% bounce right
  // 70% land right
  // 80% bump word left
  // (90% bubble)
  // 100% pause
  from {
    opacity: 0;
    transform: scale(3);
  }
  10% {
    opacity: 1;
    transform: scale(3);
  }
  15% {
    transform: scale(3) translateY(0.5em) scaleY(1.5);
  }
  20% {
    transform: scale(1) translateY(-300%);
  }
  30% {
    transform: translateY(1em) scaleY(0.5);
  }
  40% {
    transform: translateY(-400%);
  }
  50% {
    transform: translateY(-1em);
  }
  53% {
    transform: translateY(-300%);
  }
  56% {
    transform: translateY(-1em);
  }
  59% {
    transform: translateY(-200%);
  }
  62% {
    transform: translateY(1em);
  }
  80%,
  90%,
  to {
    transform: translateY(1em);
  }
}

@keyframes dot-inner {
  // 10% fade in
  // 20% shoot up
  // 30% bounce down
  // 40% shoot up
  // 50% bounce down
  // 60% bounce right
  // 70% land right
  // 80% bump word left
  // (90% bubble)
  // 100% pause
  from,
  45% {
    transform: none;
  }
  // 55% {
  //   transform: translateX(100%);
  // }
  // 60% {
  //   transform: translateX(200%);
  // }
  // 65% {
  //   transform: translateX(250%);
  // }
  70% {
    transform: translateX(6em);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0);
  }
  80% {
    transform: translateX(4.3em);
    animation-timing-function: var(--easing);
  }
  83%,
  to {
    transform: translateX(4.4em);
  }
}

/* Small helper to keep animation in sync */
body:not([data-play]) {
  *,
  *:before,
  *:after {
    visibility: hidden;
    animation: none !important;
  }
}


3. JS:

console.clear();

Splitting();

// Replay animation by hiding & showing the element again
let el = document.body;
el.addEventListener("click", function (e) {
  el.hidden = true;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});

// Small helper to make sure the animation stays in sync.
requestAnimationFrame(() => {
  document.body.dataset.play = true;
});
