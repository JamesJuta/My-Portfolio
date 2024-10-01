function loadFooter() {
    const footerHTML = `
        <footer class="mb-5 p-4 anm_mod full fast" style="background-color: #f0fbff; width: 100%; height: fit-content; border-radius: 15px;">
            <div class="d-flex align-items-center justify-content-center mb-2">
                <img src="img/blue_logo.png" alt="" height="60" class="d-inline-block align-text-top p-1">
            </div>
            <h6 class="text-center mb-3"><b>Together, let's create something truly remarkable!</b> </h6>
            <div class="container">
                <div class="row d-flex justify-content-between text-center p-0">
                    <div class="col-md-4 mb-3 mb-md-0" style="text-align: left;">
                        <h5>Connect with me</h5>
                        <p style="font-size: smaller;">Let's connect to discuss how my experience and passion for design can contribute to your business success.</p>
                        <a class="view_folio_btn btn btn-sm" href="lets_talk.html">Send Message <i class="bi bi-arrow-right"></i></a>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <p class="mb-0">Email: <a class="text_primary" href="mailto:3jamesjuta0617@gmail.com">03jamesjuta0617@gmail.com</a></p>
                        <p>Phone: <a class="text_primary" href="tel:+639067265342">+639067265342</a></p>
                    </div>
                    <div class="col-md-2 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a class="text_primary" href="index.html">Home</a></li>
                            <li><a class="text_primary" href="portfolio.html">Portfolio</a></li>
                            <li><a class="text_primary" href="abouts.html">Abouts</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5>Follow Us</h5>
                        <div class="social-icons" style="font-size: 25px;">
                            <a href="tel:+639067265342" class="hero_social_icon"><i class="bi bi-telephone-fill"></i></a>
                            <a href="mailto:03jamesjuta0617@gmail.com" class="hero_social_icon"><i class="bi bi-envelope"></i></a>
                            <a href="https://www.facebook.com/james.juta.0617/" class="hero_social_icon"><i class="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-12">
                        <p class="mb-0 text-center">&copy; 2024 JJ Designs. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Call the function when the window loads
window.onload = function() {
    loadFooter();
};
