window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define rectangle properties
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = 250;  // X position of the rectangle center
    var rectY = 150;  // Y position of the rectangle center
    var angle = 0;    // Initial angle in radians

    // Function to draw the rectangle using a rotation matrix
    function drawRectangleWithMatrix(x, y, angle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Calculate the rotation matrix
        var cosA = Math.cos(angle);
        var sinA = Math.sin(angle);

        // Transform matrix: [ cosA  -sinA  0 ]
        //                     [ sinA   cosA  0 ]
        //                     [   0      0   1 ]
        var matrix = [
            cosA, -sinA, 0,
            sinA,  cosA, 0,
            0,      0,   1
        ];

        // Set up the transformation matrix
        ctx.setTransform(matrix[0], matrix[1], matrix[3], matrix[4], x, y);

        // Draw the rectangle centered at the new origin
        ctx.fillStyle = '#00f'; // Set the fill color to blue
        ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

        // Reset the transformation matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    // Function to animate the rotation
    function animate() {
        angle += 0.01; // Increment angle
        drawRectangleWithMatrix(rectX, rectY, angle); // Draw the rotated rectangle

        requestAnimationFrame(animate); // Request next frame
    }

    // Start animation
    animate();
};