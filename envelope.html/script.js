document.addEventListener("DOMContentLoaded", function() {
        const pen = document.getElementById("pen");
            const text = document.getElementById("text-to-write");

                let cursorX = 10;
                    let cursorY = 25;
                        let speed = 20;

                            let interval = setInterval(() => {
                                    cursorX += 10;
                                            if (cursorX >= text.offsetWidth + 20) {
                                                        clearInterval(interval);
                                                                }
                                                                        pen.style.left = cursorX + 'px';
                                                                                pen.style.top = cursorY + 'px';
                                                                                    }, speed);
                                                                                    });
})