let canScroll = true;
let scrollText;
let burgerMenuToggled = false;
let brugerMenu;

window.onload = function () {
    console.log("hello world");
    scrollText = document.getElementById("scrollText");
    brugerMenu = document.getElementById("burgerContainer");
    document.addEventListener("keydown", keyDown)
}

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

const scrollToContent = (divName) => {
    document.getElementById(divName).scrollIntoView({
        behavior: 'smooth'
    });
}

const toggleBurgerMenu = () => {
    if (burgerMenuToggled == false) {
        brugerMenu.style.display = "block";
        burgerMenuToggled = true;
    } else if (burgerMenuToggled == true) {
        brugerMenu.style.display = "none";
        burgerMenuToggled = false;
    }
}

const keyDown = (e) => {
    if (e.code == "Escape") {
        if (burgerMenuToggled) {
            toggleBurgerMenu();
        }
    }
}

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

const coursesButtonClicked = () =>
{
    document.location.href = "/index.html#pageContainer";
    if (burgerMenuToggled)
    {
        toggleBurgerMenu();
    }
}

const goToCourse = (course) =>
{
    console.log(`/${course}.html`)
    document.location.href = `/${course}.html`;
}

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
            console.log("its not null")
            if (node.classList.contains("courseContent"))
            {
                console.log("it contains courseContent")
                contentNodes.push(node);
            }
        }
    });

    console.log(contentNodes);

    if (contentNodes[index].classList.contains("courseHidden"))
    {
        contentNodes[index].classList.remove("courseHidden");
    }
    else if (contentNodes[index].classList.length == 0)
    {
        contentNodes[index].classList.add("courseHidden");
    }
}