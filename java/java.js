function am(f, a){
    let path = 'https://om-aroraa.github.io/carstar//all%20cars';
    window.location.replace(`${path}\\${f}\\${a}.html`);
}

console.log("Script Loaded!")

window.onscroll = () => {
    this.scrollY > 20 ? document.getElementById("navi").classList.add("sticky") : document.getElementById("navi").classList.remove("sticky");
}
