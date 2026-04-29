import { useState, useEffect } from 'react';

function Nav() {
    
    // State to track whether the nav is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const liLinks = ["/", "/feedback", "/remember"]; // List of links to be added to the nav

    // use useEffect when you want to use a side effect, in this case we want to listen to the window resize event and update the nav state accordingly
    useEffect(() => {
        // Function to handle the window resize event, it will set the nav to open if the window width is greater than 768px, otherwise it will set it to closed
        const handleResize = () => {
            setIsOpen(window.innerWidth > 768); // Set nav to open if window width is greater than 768px
        }

        handleResize();

        // Add the event listener for the window resize event
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // This kinda works, but it doesn't work with react.
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
                {/**
                 * Never change the useState varible directly, or it will re-render again and again, 
                 * use the setState function to change the state, and it will re-render only once.
                 */}
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