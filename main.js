function main() {
  function generateStar() {
    const star = document.createElement('div');
    star.className = 'star';

    const style = star.style;
    const size = `${Math.round(Math.random()) + 0.5}px`;
    style.height = size;
    style.width = size;
    style.left = `${Math.round(Math.random() * 100)}%`;
    style.top = `${Math.round(Math.random() * 100)}%`;

    const speed = Math.round(Math.random() * 15) + 5;
    const delay = Math.round(Math.random() * 25);
    style.animation = `shiningStar ${speed}s -${delay}s infinite`;

    return star;
  };

  const starsWrapper = document.getElementById('stars-wrapper');

  for (let i = 0; i < 245; i++) {
    starsWrapper.appendChild(generateStar());
  };
};

main();
