window.scrollTo(0, 0,)

const protector = document.querySelector(".protector")
window.addEventListener("load", () => {
    setTimeout(() => {
        protector.classList.remove("protector-active")
        setTimeout(() => {
            protector.style.display = "none"
        }, 320);
    }, 250);
})

window.addEventListener("unload", () => {
    window.scrollTo(0, 0)
})