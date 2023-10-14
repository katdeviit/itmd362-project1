(() => {
    let nightModeButtons = document.getElementsByClassName("night-mode-button");
    if(nightModeButtons.length < 1) {
        console.log("Error locating night mode button!");
    }
    let nightModeButton = nightModeButtons.item(0);
    nightModeButton.addEventListener("click", () => {
        if(document.body.classList.contains("mode-light")) {
            document.body.classList.remove("mode-light");
            document.body.classList.add("mode-dark");
        } else if(document.body.classList.contains("mode-dark")) {
            document.body.classList.remove("mode-dark");
            document.body.classList.add("mode-light");
        }
    })
})();
