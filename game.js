const container = document.createElement('section');
container.classList.add('container');
const gridItems = [];

for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridItems.push(div);
    container.appendChild(div);
}

document.body.appendChild(container);

// 2. create a mole div
const mole = document.createElement('div');
mole.classList.add('mole');

// 3. randomly place the mole div in the grid
function placeMole() {
    const gridItems = document.querySelectorAll('.grid-item');
    const randomNumber = Math.floor(Math.random() * gridItems.length);
    const randomGridItem = gridItems[randomNumber];
    randomGridItem.appendChild(mole);
}

// 4. when the user clicks on the mole div, the mole div disappears
mole.addEventListener('click', function () {
    mole.remove();
    // 5. after a random amount of time, the mole div reappears in a new random location
    setTimeout(placeMole, Math.random() * 1000);
});

// 6. repeat steps 4 and 5 until the user has clicked on the mole div 10 times
let clicks = 0;
mole.addEventListener('click', function () {
    clicks++;
    console.log(clicks);
    if (clicks === 10) {
        // 7. when the user has clicked on the mole div 10 times, display a message saying "You Win!"
        alert('You Win!');
        clicks = 0;
    }
});

placeMole();