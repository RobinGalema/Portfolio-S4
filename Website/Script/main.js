let canScroll = true;
let scrollText;
let burgerMenuToggled = false;
let brugerMenu;

// Event for when the page is loaded
window.onload = function () {
    console.log("hello world");
    scrollText = document.getElementById("scrollText");
    brugerMenu = document.getElementById("burgerContainer");
    document.addEventListener("keydown", keyDown)
}

// Event for scrolling
window.onscroll = () => {
    console.log(canScroll);
    if (pageYOffset >= 50) {
        if (canScroll) {
            scrollToContent("pageContainer");
            scrollText.style.display = "none";
            canScroll = false
        }
    } else if (pageYOffset < 100) {
        canScroll = true;
        scrollText.style.display = "block";
    }
}

/**
 * A function that smoothly scrolls to a given div on the page
 * 
 * @param {string} divName The classname of the div to scroll to.
 */
const scrollToContent = (divName) => {
    document.getElementById(divName).scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * A function that toggles the side-menu on or off when clicking on the burger menu icon
 */
const toggleBurgerMenu = () => {
    if (burgerMenuToggled == false) {
        brugerMenu.style.display = "block";
        burgerMenuToggled = true;
    } else if (burgerMenuToggled == true) {
        brugerMenu.style.display = "none";
        burgerMenuToggled = false;
    }
}

/**
 * Callback function for the keydown event. This function checks which key was pressed and runs functions depending on which key was pressed.
 * 
 * @param {Object} e The object returned by the "keydown" event
 */
const keyDown = (e) => {
    console.log(e);
    if (e.code == "Escape") {
        if (burgerMenuToggled) {
            toggleBurgerMenu();
        }
    }
}

/**
 * A function that sets the current page to the homepage of the website and closes any menu items that are overlaying the screen
 */
const homeButtonClicked = () =>
{
    document.location.href = "/index.html#landingContainer";
    {
        if (burgerMenuToggled)
        {
            toggleBurgerMenu();
        }
    }
}

/**
 * A function that sets the current page to the courses section of the home page of the website and closes any menu items that are overlaying the screen
 */
const coursesButtonClicked = () =>
{
    document.location.href = "/index.html#pageContainer";
    if (burgerMenuToggled)
    {
        toggleBurgerMenu();
    }
}

/**
 * A function that will set the current page to the page of the desired course
 * 
 * @param {string} course The name of the course of which the page should be loaded
 */
const goToCourse = (course) =>
{
    console.log(`/${course}.html`)
    document.location.href = `/${course}.html`;
}

/**
 * A function that toggles content under a dropdown menu on and off
 * 
 * @param {Object} clickedNode The object of the node that was clicked, this is sent by adding .this as the first argument when using this function as an "onclick" in html.
 * @param {number} index The index of the node in the list of dropdown items
 */
const showContent = (clickedNode, index) =>
{
    let parentNode = clickedNode.parentNode;
    let nodeList
    nodeList = parentNode.childNodes;
    let contentNodes = [];

    nodeList.forEach(node => {
        console.log(node);
        if (node.classList != null)
        {
            if (node.classList.contains("courseContent"))
            {
                contentNodes.push(node);
            }
        }
    });

    if (contentNodes[index].classList.contains("courseHidden"))
    {
        contentNodes[index].classList.remove("courseHidden");
        clickedNode.style.padding = "0";
    }
    else if (contentNodes[index].classList.length == 1)
    {
        contentNodes[index].classList.add("courseHidden");
        clickedNode.style.padding = "0 2em 0 2em";
    }
}