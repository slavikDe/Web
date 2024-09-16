const film_book = document.getElementById("film_book");
const gentle_Line  = document.querySelector("ol li");
const btn_add_img = document.getElementsByClassName("btn")[0];
const btn_increase_img = document.getElementsByClassName("btn")[1];
const btn_decrease_img = document.getElementsByClassName("btn")[2];
const btn_delete_img = document.getElementsByClassName("btn")[3];

film_book.addEventListener("click", changeBackground);
gentle_Line.addEventListener("click", changeBackground);
btn_add_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    // img.src = "https://ukraine.ua/wp-content/uploads/2020/09/Lviv-panoramic-view.Patteran.shutterstock-1536x1017.jpg";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5RG5lQdAahukd-uUpbmVeV7n5wHSk8XHaQ&s";
    img.width = 150;
    img.height = 150;
    scrollPageDown(btn_add_img);
});
btn_increase_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.width += 50;
    img.height += 50;
    scrollPageDown(btn_increase_img);

});
btn_decrease_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.width -= 50;
    img.height -= 50;
    scrollPageDown(btn_decrease_img);
});
btn_delete_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.src = "";
    img.width = 0;
    img.height = 0;

})

function changeBackground(event){
    const film = event.target;
    film.style.backgroundColor = getRandomColor();
    film.style.color = getRandomColor();
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate a random number and convert to hex
    return `#${randomColor.padStart(6, '0')}`; // Ensure the hex string has 6 characters
}

function  scrollPageDown(scroll_btn) {
        scroll_btn.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight, // Висота тіла документа
            behavior: 'smooth' // Плавний скролл
        });
    })
}



