let canScroll = true;
let scrollText;
let burgerMenuToggled = false;
let brugerMenu;

window.onload = function()
{
    console.log("hello world");
    scrollText = document.getElementById("scrollText");
    brugerMenu = document.getElementById("burgerContainer");
    this.document.addEventListener("keydown", keyDown)
}

window.onscroll = () =>
{
    console.log(canScroll);
    if (pageYOffset >= 50)
    {
        if (canScroll)
        {
        scrollToContent("pageContainer");
        scrollText.style.display = "none";
        canScroll = false
        }
    }
    else if (pageYOffset < 100)
    {
        canScroll = true;
        scrollText.style.display = "block";
    }
}

const scrollToContent = (divName) =>
{
    document.getElementById(divName).scrollIntoView({
        behavior: 'smooth'
      });
}

const toggleBurgerMenu = () =>
{
    if (burgerMenuToggled == false)
    {
        console.log("yeet");
        brugerMenu.style.display = "block";
    }
}

const keyDown = (e) =>
{
    console.log(e.code);
}


