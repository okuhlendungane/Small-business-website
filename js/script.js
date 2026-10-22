class Header extends HTMLElement {
    connectedCallback() {
        const homeLink= this.getAttribute("homeLink")
        const servicesLink= this.getAttribute("servicesLink")
        const aboutLink= this.getAttribute("aboutLink")
        const contactLink= this.getAttribute("contactLink")

        this.innerHTML = `
            <nav>
                <button class="menu-toggle" id="menu-toggle">&#9776;</button>
                <ul>
                    <li><a href=${homeLink}>Home</a></li>
                    <li><a href=${servicesLink}>Services</a></li>
                    <li><a href=${aboutLink}>About</a></li>
                    <li><a href=${contactLink}>Contact</a></li>
                </ul>
            </nav>
            
        `;
    }
}

customElements.define('main-header', Header);


//add on click for menu toggle button
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
