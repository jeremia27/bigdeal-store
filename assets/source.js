document.getElementById("year").innerHTML = new Date().getFullYear();

// function buy(product_name) {
//     alert(product_name);

// }

function buy(product_name, product_price) {
    const message = `Halo saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6282167401737?text=${message}`
    open(whatsapp, "_blank")

}

function chat(){
    const message = `Halo saya mau beli product BIG DEAL STORE`
    const whatsapp = `https://wa.me/6282167401737?text=${message}`
    open(whatsapp, "_blank")
}