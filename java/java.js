function am(f, a){
    let path = 'D:\\carstar\\all cars';
    window.location.replace(`${path}\\${f}\\${a}.html`);
}

window.onscroll = () => {
    this.scrollY > 20 ? document.getElementById("navi").classList.add("sticky") : document.getElementById("navi").classList.remove("sticky");
}
