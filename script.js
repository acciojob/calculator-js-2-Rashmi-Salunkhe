//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;

            switch (button.id) {
                case "C":
                    display.value = "";
                    break;
                case "back":
                    display.value = display.value.slice(0, -1);
                    break;
                case "equal":
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error";
                    }
                    break;
                default:
                    display.value += value;
            }
        });
    });
});
