// darkmode.js

function toggleMode() {
    var body = document.body;
    var currentTextColor = body.getAttribute("text");
    var currentBgColor = body.getAttribute("bgcolor");

    if (currentTextColor === "FFFFFF" && currentBgColor === "000000") {
        // Switch to Light Mode
        body.setAttribute("text", "000000");
        body.setAttribute("bgcolor", "FFFFFF");
    } else {
        // Switch to Dark Mode
        body.setAttribute("text", "FFFFFF");
        body.setAttribute("bgcolor", "000000");
    }
}
