const cells = document.querySelectorAll('.my_cell');
const input_color = document.getElementById('color');
const double_click = document.getElementsByClassName('double_click');

cells.forEach(cell => {
    let originalColor = '';

    cell.addEventListener('mouseover', function() {
        originalColor = this.style.backgroundColor;
        this.style.backgroundColor = getRandomColor();
    });

    cell.addEventListener('mouseout', function() {
        this.style.backgroundColor = originalColor;
    });

    cell.addEventListener('click', function() {
        this.style.backgroundColor = input_color.value;
        originalColor = input_color.value;
    });

    cell.addEventListener('dblclick', function() {
        const tds = document.getElementsByClassName('change_color');
        Array.from(tds).forEach(td => {
            td.style.backgroundColor = input_color.value;
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}