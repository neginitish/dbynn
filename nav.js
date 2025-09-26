// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'selected' from all links
    navLinks.forEach(l => l.classList.remove('selected'));
    
    // Add 'selected' to the clicked link
    link.classList.add('selected');
  });
});


  // Hides loader after the page has loaded
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  });

  // Intercepts all internal link clicks to show loader before redirect
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    document.querySelectorAll("a[href]").forEach(link => {
      const isInternal = link.hostname === location.hostname;
      const isAnchor = link.getAttribute("href").startsWith("#");

      if (isInternal && !isAnchor) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = link.href;

          loader.classList.remove("hidden");

          setTimeout(() => {
            window.location.href = href;
          }, 2000);
        });
      }
    });
  });


  (function () {
  var script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-7JBLQVC7BB";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-7JBLQVC7BB');
})();