window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define initial rectangle properties
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = 300;  // X position of the rectangle center
    var rectY = 200;  // Y position of the rectangle center
    var scaleFactor = 1; // Initial scale factor

    // Function to draw the rectangle
    function drawRectangle(x, y, scale) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        
        ctx.save(); // Save the current state
        ctx.translate(x, y); // Move the origin to the rectangle center
        ctx.scale(scale, scale); // Apply scaling transformation

        // Draw the rectangle centered at the new origin
        ctx.fillStyle = '#00f'; // Set the fill color to blue
        ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

        ctx.restore(); // Restore the previous state
    }

    // Function to animate scaling
    function animate() {
        scaleFactor = 1 + Math.sin(Date.now() / 1000); // Update scale factor
        drawRectangle(rectX, rectY, scaleFactor); // Draw the scaled rectangle

        requestAnimationFrame(animate); // Request next frame
    }

    // Start animation
    animate();
};