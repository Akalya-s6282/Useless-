document.addEventListener("DOMContentLoaded", function() {
        alert("DOM content loaded!"); // Checks if DOM has loaded
        
        const pen = document.getElementById("pen");
        alert("Pen element found!"); // Checks if the pen element is selected
        const text = document.getElementById("text-to-write");
        let cursorX = 10;
        let cursorY = 25;
        let speed = 20;
         // Verifies that the movement function is about to start
    
        // Move pen with interval to test
        let interval = setInterval(() => {
            cursorX += 10;
            if (cursorX >= text.offsetWidth + 20) {
                clearInterval(interval);
            }
            pen.style.left = cursorX + 'px';
            pen.style.top = cursorY + 'px';
            
             // Alerts every time pen moves
        }, speed);
    });