var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

$(window).scroll(function() {
    $(".animation .anm_mod").each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
    $(this).addClass("active");
    }
    if (scroll < 100) {
    $(this).removeClass("active");
    }
    });
    });

    $(function() {
    $('a[href^="#"]').click(function() {
    const speed = 800;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
    });
});



const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        menuIcon.innerHTML = '&times;'; // Change to X icon
        document.querySelector('.sidebar').style.right = '0'; // Show sidebar
    } else {
        menuIcon.innerHTML = '&#9776;'; // Change back to hamburger menu
        document.querySelector('.sidebar').style.right = '-250px'; // Hide sidebar
    }
});

overlay.addEventListener('click', () => {
    menuToggle.checked = false;
    menuIcon.innerHTML = '&#9776;';
    document.querySelector('.sidebar').style.right = '-250px';
});