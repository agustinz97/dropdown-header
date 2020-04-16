const btnNavbar = document.querySelector('.Navbar__btn')
const menuNavbar = document.querySelector('.Navbar__menu')
const links = document.querySelectorAll('.Navbar__menu--item a')

btnNavbar.addEventListener('click', () => {
    menuNavbar.classList.toggle('show');

    links.forEach((link, i) => {
        link.classList.toggle('fade')

        const delay = 2*i/10
        /* link.style.transition = `opacity ease 1.5s ${delay}` */
        link.style.transition = "opacity 1.5s ease "+delay+"s"
    })
})