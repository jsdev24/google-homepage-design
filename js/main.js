let productsBtn = document.querySelector("#productsBtn");
let productsSection = document.querySelector(".products-section");
let googleProducts = [];

function addProductToObj(name, icon) {
    googleProducts.push({ name, icon });
}

addProductToObj("Search", "./img/google_search.png");
addProductToObj("Maps", "./img/google_maps.png");
addProductToObj("Play", "./img/google_play.png");
addProductToObj("News", "./img/google_news.png");
addProductToObj("Gmail", "./img/google_gmail.png");
addProductToObj("Meet", "./img/google_meet.png");
addProductToObj("Drive", "./img/google_drive.png");
addProductToObj("Calendar", "./img/google_calendar.png");
addProductToObj("Photos", "./img/google_photos.png");
addProductToObj("Sheets", "./img/google_sheets.png");
addProductToObj("Books", "./img/google_books.png");
addProductToObj("Hangouts", "./img/google_hangouts.png");
addProductToObj("Keep", "./img/google_keep.png");
addProductToDOM();

function addProductToDOM() {
    googleProducts.forEach(product => {
        productsSection.innerHTML += `<div class="product">
            <img src=${product.icon} alt="">
            <p>${product.name}</p>
        </div>`;
    })
}

productsBtn.addEventListener("click", function() {
    productsSection.classList.toggle("show_products");
})
