window.addEventListener('load', (event) => {
    const navbar = document.getElementById("sideBar");
});


function openNav()
{
    console.log("Expand");
    document.getElementById("sideBar").style.width = "15%";
}

function closeNav()
{
    document.getElementById("sideBar").style.width = "0%";
}