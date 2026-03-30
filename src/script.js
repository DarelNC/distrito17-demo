/** Menu JS **/
function toggleMenu() {
  let menu_wrapper = document.getElementById('menu-wrapper')
  let menu_backdrop = document.getElementById('menu-backdrop')
  let navbar = document.getElementById('navbar')

  menu_wrapper.classList.toggle('open')
  menu_backdrop.classList.toggle('active-menu')

  if (menu_backdrop.classList.contains('active-menu')) {
    let navbarHeight = navbar.offsetHeight

    menu_backdrop.style.height = `calc(100vh - ${navbarHeight}px`
    document.body.style.overflow = 'hidden' // Disable scroll
  } else {
    menu_backdrop.style.height = ''
    document.body.style.overflow = '' // Enable scroll
  }
}

window.toggleMenu = toggleMenu

/** Mailto */
document.getElementById("mailto-trigger").addEventListener("click", () => {
  const reversedEmail = document.querySelector(".email-reverse").innerText;
  const realEmail = reversedEmail.split("").reverse().join("");
  window.location.href = `mailto:${realEmail}`;
});
