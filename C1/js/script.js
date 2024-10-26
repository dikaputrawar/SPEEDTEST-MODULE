const ball = document.querySelector('.ball');
const container = document.querySelector('.container');

let x = 0;
let y = 0;
let vx = 5;
let vy = 5;

function animate() {
    x += vx;
    y += vy;

    if (x + 50 >= container.offsetWidth || x <= 0) {
        vx = -vx;
    }

    if (y + 50 >= container.offsetHeight || y <= 0) {
        vy = -vy;
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    requestAnimationFrame(animate);
}

animate();