window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define rectangle properties
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = 250;  // X position of the rectangle center
    var rectY = 150;  // Y position of the rectangle center
    var angle = 0;    // Initial angle in radians

    // Function to draw the rectangle
    function drawRectangle(x, y, angle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        ctx.save(); // Save the current state
        ctx.translate(x, y); // Move the origin to the rectangle center
        ctx.rotate(angle); // Rotate by the specified angle

        // Draw the rectangle centered at the new origin
        ctx.fillStyle = '#00f'; // Set the fill color to blue
        ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

        ctx.restore(); // Restore the previous state
    }

    // Function to animate the rotation
    function animate() {
        angle += 0.01; // Increment angle
        drawRectangle(rectX, rectY, angle); // Draw the rotated rectangle

        requestAnimationFrame(animate); // Request next frame
    }

    // Start animation
    animate();
};
