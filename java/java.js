function am(f, a){
    let path = '/carstar/all%20cars';
    window.location.href = `${path}/${f}/${a}.html`;
}

console.log("Javascript Script Loaded!")

window.onscroll = () => {
    this.scrollY > 20 ? document.getElementById("navi").classList.add("sticky") : document.getElementById("navi").classList.remove("sticky");
}
