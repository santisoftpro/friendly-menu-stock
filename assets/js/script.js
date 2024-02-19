

let menu_icon_box = document.querySelector(".nav__img");
let submenu = document.querySelector(".sidebar");
menu_icon_box.onclick = function () {
    menu_icon_box.classList.toggle("show");
    submenu.classList.toggle("show")
}

$(".menu > ul > li").click(function (e) {
    // remove active from already active
    $(this).siblings().removeClass("active");
    // adding active to clicked
    $(this).toggleClass("active");
    // if has sub menu open it
    $(this).find("ul").slideToggle();
    // clode other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active class of menu
    $(this).siblings().find("li").removeClass("active")
});
$(".menu-btn ").click(function () {
    $(".sidebar").toggleClass("active");
});