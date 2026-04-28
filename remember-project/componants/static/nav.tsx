import { useState } from 'react';

function Nav() {
    
    // State to track whether the nav is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const liLinks = ["/", "/feedback", "/remember"]; // List of links to be added to the nav

    // This kinda works, but it doesn1t work with react.
        /*const toggleNav = () => {
            const navbutton = document.getElementById('navBtp');
            const liLinks = ["/", "/feedback", "/remember"]; // List of links to be added to the nav
            const nav = document.querySelector('nav ul');
            // Check if the nav has content, if not add the links, otherwise clear it
            nav.innerHTML == "" ?  liLinks.forEach(link => {
                // add the link to the nav and set the button text to 'X'
                if (link === "/") {
                    nav.innerHTML += `
                        <li><a href="${link}">Home</a></li>
                    `;
                    navbutton.textContent = 'X';
                    return;
                } else {
                    nav.innerHTML += `
                        <li><a href="${link}">${link.charAt(1).toUpperCase() + link.slice(2)}</a></li>
                    `;
                    navbutton.textContent = 'X';
                }
            }) : (nav.innerHTML = "" , navbutton.textContent = '--'); // Clear the nav and set the button text to '--'
        };*/

    return (
        <nav>  
            {/* The button to toggle the nav, it will display 'X' when the nav is open and '--' when it is closed */}
            <p id="navBtp" onClick={() => setIsOpen(!isOpen)}>
                {/*if the nav is open, display 'X', otherwise display '--'*/}
                {isOpen ? 'X' : '--'}
            </p>
            <ul>
                {/* If the nav is open, display the links, otherwise display nothing */}
                {isOpen && liLinks.map(link => (
                    <li key={link}>
                        <a href={link}>
                            {link === "/" ? "Home" : link.charAt(1).toUpperCase() + link.slice(2)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;