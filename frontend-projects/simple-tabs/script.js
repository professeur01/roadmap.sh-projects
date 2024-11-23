const links = document.querySelectorAll("ul li");
const contents = document.querySelectorAll(".content");

links[0].addEventListener('click',() => {
    contents[0].style.display = "block"
    contents[1].style.display = "none"
    contents[2].style.display = "none"
    contents[3].style.display = "none"
})
links[1].addEventListener('click',() => {
    contents[0].style.display = "none"
    contents[1].style.display = "block"
    contents[2].style.display = "none"
    contents[3].style.display = "none"
})
links[2].addEventListener('click',() => {
    contents[0].style.display = "none"
    contents[1].style.display = "none"
    contents[2].style.display = "block"
    contents[3].style.display = "none"
})
links[3].addEventListener('click',() => {
    contents[0].style.display = "none"
    contents[1].style.display = "none"
    contents[2].style.display = "none"
    contents[3].style.display = "block"
})