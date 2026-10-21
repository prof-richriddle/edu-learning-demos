// Site name: change it here and every page updates.
var SITE_NAME = "Assignments and Tinkerings of Professor Richard Dixon Riddle";

// Fill the top bar.
var siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  siteHeader.innerHTML =
    '<a href="index.html"><i class="fas fa-home" aria-hidden="true"></i> ' +
    SITE_NAME + '</a>';
}

// Set the browser tab name.
// Home page: just the site name. Other pages: "Page title | Site name".
if (document.body.classList.contains("home")) {
  document.title = SITE_NAME;
} else {
  document.title = document.title + " | " + SITE_NAME;
}
