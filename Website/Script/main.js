let canScroll = true;
let scrollText;

window.onload = function()
{
    console.log("hello world");
    scrollText = document.getElementById("scrollText");
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


