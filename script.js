let lightiocn = document.querySelector(".lightiocn");
let h1 = document.querySelector(".h1");
let body = document.querySelector(".body")
let span = document.querySelector(".span");
lightiocn.addEventListener("click",()=>
{
    body.classList.toggle("black")
    h1.classList.toggle("white");
    lightiocn.classList.toggle("fa-solid");
    lightiocn.classList.toggle("fa-moon");
    lightiocn.classList.toggle("colorwhite");
    if( span.textContent === "Light")
    {
        span.textContent="Dark";
    }
    else 
    {
        span.textContent="Light";
    }
});
