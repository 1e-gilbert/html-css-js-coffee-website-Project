let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// About Us learn More

document.getElementById("learnMoreBtn").addEventListener("click", function(e) {
    e.preventDefault();
    var extraContent = document.getElementById("extraContent");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        document.getElementById("learnMoreBtn").textContent = "show less";
    } else {
        extraContent.style.display = "none";
        document.getElementById("learnMoreBtn").textContent = "learn more";
    }
});


// Physical Shop learn More

document.getElementById("learnMoreBtnPhysicalShop").addEventListener("click", function(e) {
    e.preventDefault();
    var extraContent = document.getElementById("extraContentPhysicalShop");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        document.getElementById("learnMoreBtnPhysicalShop").textContent = "show less";
    } else {
        extraContent.style.display = "none";
        document.getElementById("learnMoreBtnPhysicalShop").textContent = "learn more";
    }
});


//Blog 1 Learn More

document.getElementById("readMoreBtnBlog").addEventListener("click", function(e) {
    e.preventDefault();
    var extraContent = document.getElementById("extraContentBlog");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        document.getElementById("readMoreBtnBlog").textContent = "show less";
    } else {
        extraContent.style.display = "none";
        document.getElementById("readMoreBtnBlog").textContent = "read more";
    }
});


//Blog 2 Learn More

document.getElementById("readMoreBtnBlogJune").addEventListener("click", function(e) {
    e.preventDefault();
    var extraContent = document.getElementById("extraContentBlogJune");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        document.getElementById("readMoreBtnBlogJune").textContent = "show less";
    } else {
        extraContent.style.display = "none";
        document.getElementById("readMoreBtnBlogJune").textContent = "read more";
    }
});


//Blog 3 Learn More

document.getElementById("readMoreBtnBlogFeburary").addEventListener("click", function(e) {
    e.preventDefault();
    var extraContent = document.getElementById("extraContentBlogFeburary");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        document.getElementById("readMoreBtnBlogFeburary").textContent = "show less";
    } else {
        extraContent.style.display = "none";
        document.getElementById("readMoreBtnBlogFeburary").textContent = "read more";
    }
});










