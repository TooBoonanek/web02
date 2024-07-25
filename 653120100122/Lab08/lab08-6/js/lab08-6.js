window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define initial rectangle properties
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = canvas.width / 2; // X position of the rectangle center
    var rectY = canvas.height / 2; // Y position of the rectangle center
    var scaleFactor = 1; // Initial scale factor
    var scaleDirection = 1; // Direction of scaling (1 for expanding, -1 for contracting)

    // Function to draw the rectangle using a scaling matrix
    function drawRectangleWithMatrix(x, y, scale) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Calculate the scaling matrix
        var scaleX = scale;
        var scaleY = scale;

        // Set up the scaling matrix
        ctx.setTransform(scaleX, 0, 0, scaleY, x, y);

        // Draw the rectangle centered at the new origin
        ctx.fillStyle = '#00f'; // Set the fill color to blue
        ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
        ctx.strokeStyle = '#000'; // Set the border color
        ctx.strokeRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight); // Draw border

        // Reset the transformation matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    // Function to animate scaling
    function animate() {
        // Update scale factor and direction
        scaleFactor += scaleDirection * 0.02; // Increment or decrement scale factor
        if (scaleFactor > 2 || scaleFactor < 0.5) { // Reverse direction if limits are reached
            scaleDirection *= -1;
        }

        // Draw the rectangle with updated scale
        drawRectangleWithMatrix(rectX, rectY, scaleFactor);

        // Request next frame
        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
};