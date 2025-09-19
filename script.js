const text = "Git Primer commit segundo cambio por Verly Ramos";
const h1 = document.getElementById("typewriter");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        h1.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 45); // velocidad de escritura (100ms por letra)
    }
}

window.onload = typeWriter;
