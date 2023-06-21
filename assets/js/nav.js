function goTo(id){
    let section = document.getElementById(id);
    if(section) {
        let position = section.offsetTop;
        window.scroll(0,position);
    }
}