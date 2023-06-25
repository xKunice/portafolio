const links = document.querySelectorAll("#subNav a");
links.forEach(link => {
    link.addEventListener("click", action =>{
        action.preventDefault();
        let id = link.getAttribute("href");
        goTo(id);
    });
});
function goTo(id){
    let section = document.getElementById(id);
    if(section) {
        let position = section.offsetTop;
        window.scroll(0,position);
    }
}