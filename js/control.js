(() => {
    let nightModeButtons = document.getElementsByClassName("night-mode-button");
    if(nightModeButtons.length < 1) {
        console.log("Error locating night mode button!");
        return;
    }
    let nightModeButton = nightModeButtons.item(0);
    let darkModeSwitch = () => {
        if(document.body.classList.contains("mode-light")) {
            document.body.classList.remove("mode-light");
            document.body.classList.add("mode-dark");
        } else if(document.body.classList.contains("mode-dark")) {
            document.body.classList.remove("mode-dark");
            document.body.classList.add("mode-light");
        }
    };
    nightModeButton.addEventListener("click", darkModeSwitch);
    nightModeButton.addEventListener("touch", darkModeSwitch);
    let submitButton = document.querySelector(".submit-field input");
    if(submitButton.length < 1) {
        console.log("Error locating submit button!");
        return;
    }
    let form = document.querySelector("form");
    form.addEventListener("submit", () => {
        form.classList.add("signed-up");
    });
})();
