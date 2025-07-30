type MyTextH1 = HTMLElement | null;
let button: HTMLButtonElement = document.getElementsByTagName("button")[0];

button.addEventListener('click', () => {
    let textH1: MyTextH1 = document.getElementById("text");
    if (textH1) {
        if (textH1.style.display === "none") {
            textH1.style.display = "block";
        } else {
            textH1.style.display = "none"
        }
    }
})
