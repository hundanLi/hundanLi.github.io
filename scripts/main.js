let head1 = document.querySelector("h1");
head1.textContent = "Hello World!";

document.querySelector("html").addEventListener("click", () => {
    console.log("被戳我，我怕疼!");
});

let image = document.querySelector("img");
image.onclick = function () {
    let src = image.getAttribute("src");
    if (src === "images/firefox-icon.png") {
        image.setAttribute("src", "images/firefox2.png");
    } else {
        image.setAttribute("src", "images/firefox-icon.png");
    }
};


let button = document.querySelector("button");

function setUserName() {
    let name = prompt("请输入你的名字");
    if(!name) {
        // 如果name为空
        setUserName();
        return;
    }
    localStorage.setItem("name", name);
    head1.textContent = "Mozilla 酷毙了，" + name;
}

button.onclick = function () {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let name = localStorage.getItem("name");
    head1.textContent = "Mozilla 酷毙了，" + name;
}
