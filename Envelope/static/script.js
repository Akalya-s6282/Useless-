document.addEventListener("DOMContentLoaded", function() {
    const textToWrite = document.getElementById("text-to-write");
    const inputBox = document.getElementById("input-box");
    const penCursor = document.getElementById("pen-cursor");
    
    // Function to simulate pen writing
    function simulateWriting(text) {
        textToWrite.innerText = ""; // Clear the current text
        let index = 0; // Start from the first character

        function writeNextCharacter() {
            if (index < text.length) {
                textToWrite.innerText += text.charAt(index); // Add one character
                index++;

                // Update pen cursor position
                const textWidth = textToWrite.offsetWidth;
                const textHeight = textToWrite.offsetHeight; 
                const paperRect = document.querySelector('.paper').getBoundingClientRect();
                
                penCursor.style.left = (paperRect.left + 15 + textWidth) + 'px'; 
                penCursor.style.top = (paperRect.top + 10 + textHeight) + 'px'; 
                
                setTimeout(writeNextCharacter, 100); // Delay for next character
            }
        }

        writeNextCharacter(); // Start writing the text
    }

    inputBox.addEventListener('input', function() {
        const text = inputBox.value; // Get the current input value
        simulateWriting(text); // Call the simulate writing function with current input
    });
    
    // Initial positioning of pen cursor
    penCursor.style.left = '15px';
    penCursor.style.top = '10px';
});