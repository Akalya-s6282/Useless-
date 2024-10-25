document.addEventListener("DOMContentLoaded", function() {
    const pen = document.getElementById("pen");
    const text = document.getElementById("text-to-write");

    // Make the text visible for measurement
    text.style.visibility = 'visible';

    let cursorX = 10;
    let cursorY = 25;
    let speed = 100; // Adjust speed for a smoother effect

    let interval = setInterval(() => {
        cursorX += 10;

        // Move the pen
        pen.style.left = cursorX + 'px';
        pen.style.top = cursorY + 'px';

        // Stop the interval when the pen reaches the end of the text
        if (cursorX >= text.offsetWidth + 20) {
            clearInterval(interval);
        }
    }, speed);
});