
console.log("navtoggle.js loaded");
if (typeof window === 'object') {
    // Check if document is finally loaded
    // const primaryNav = document.querySelector('.nav');
    // const navToggle = document.querySelector('.navToggle');
    // const navToggle = document.querySelector('navToggle');
    const primaryNav = document.getElementById('PrimaryNav');
    const navToggle = document.getElementById('NavToggle');

    console.log(navToggle);
    console.log(primaryNav);


    // Toggle nav
    navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");
        if (visibility === "true") {
            primaryNav.setAttribute("data-visible", "false");
            navToggle.setAttribute("data-visible", "false");
        } else {
            primaryNav.setAttribute("data-visible", "true");
            navToggle.setAttribute("data-visible", "true");
        }
    });

}