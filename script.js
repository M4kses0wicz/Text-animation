const spans = document.querySelectorAll("span");

function Linear() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "linear";
  });
}

function Ease() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "ease";
  });
}

function Ease_in() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "ease-in";
  });
}

function Ease_out() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "ease-out";
  });
}

function Ease_in_out() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "ease-in-out";
  });
}

function Steps() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "Steps(5)";
  });
}

function Cubic_bezier1() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "cubic-bezier(0.28, 0.37, 0, 1.96)";
  });
}

function Cubic_bezier2() {
  spans.forEach((span) => {
    span.style.animationTimingFunction =
      "linear(0 0%, 0.3 8.09%, 0.76 28.68%, 0.99 47.79%, 0.77 76.47%, 1.06 92.65%)";
  });
}

function Cubic_bezier3() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "cubic-bezier(1, 0.64, 0, 0.64)";
  });
}

function Cubic_bezier4() {
  spans.forEach((span) => {
    span.style.animationTimingFunction =
      "linear(0 0%, 0.11 13.97%, 0.3 18.38%, 0.27 30.88%, 0.35 45.59%, 0.48 55.15%, 0.55 67.65%, 0.74 75.74%, 0.89 83.09%, 1.08 89.71%, 1 100%)";
  });
}

function Cubic_bezier5() {
  spans.forEach((span) => {
    span.style.animationTimingFunction = "cubic-bezier(0.77,-1.28, 0, 1.96)";
  });
}
