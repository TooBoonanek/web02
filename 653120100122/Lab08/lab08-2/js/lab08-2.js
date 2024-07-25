window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define initial rectangle properties
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = 50;  // Initial X position
    var rectY = 50;  // Initial Y position

    // Function to draw the rectangle
    function drawRectangle(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = '#00f'; // Set the fill color to blue
        ctx.fillRect(x, y, rectWidth, rectHeight); // Draw the rectangle
    }

    // Function to apply translation matrix
    function applyTranslation(dx, dy) {
        ctx.save(); // Save the current state
        ctx.translate(dx, dy); // Apply the translation
        drawRectangle(rectX, rectY); // Draw the rectangle at the new position
        ctx.restore(); // Restore the previous state
    }

    // Initial draw
    drawRectangle(rectX, rectY);

    // Example of translation using matrix
    setTimeout(function() {
        applyTranslation(100, 100); // Apply translation after 2 seconds
    }, 2000);
};