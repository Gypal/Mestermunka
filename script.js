document.getElementById('cimkep').addEventListener('click', function(event) {
    const img = this;
    const rect = img.getBoundingClientRect();
    
   
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

   
    const percentageX = offsetX / rect.width * 100;
    const percentageY = offsetY / rect.height * 100;

    
    if (img.classList.contains('zoomed')) {
        img.classList.remove('zoomed');
        img.style.transformOrigin = 'center center';
        img.style.transform = 'scale(1)';
    } else {
        img.classList.add('zoomed');
        img.style.transformOrigin = `${percentageX}% ${percentageY}%`;
        img.style.transform = 'scale(2)';
    }
});
let clickCount = 0;

document.getElementById('cimkep').addEventListener('click', function() {
    const img = this;

    clickCount++;

    if (clickCount === 1) {
        img.style.transform = 'scale(1.5)'; 
    } else if (clickCount === 2) {
        img.style.transform = 'scale(5.0)';
    } else {
        img.style.transform = 'scale(1.0)'; 
        clickCount = 0;
    }
});
document.getElementById('cimkep').addEventListener('click', function(event) {
    const img = this;

   
    const x = event.offsetX / img.clientWidth;
    const y = event.offsetY / img.clientHeight;

    
    const currentTransform = img.style.transform;

    
    img.style.transformOrigin = `${x * 100}% ${y * 100}%`; 
    img.style.transform = 'scale(2.0)';

   
    setTimeout(() => {
        img.style.transform = currentTransform; 
    }, 1000);
});







   




function drawPlanets(ctx, angle) {
    const ellipseWidth = 400; 
    const ellipseHeight = 200; 
    const centerX = 600 + ellipseWidth * Math.cos(angle);
    const centerY = 400 + ellipseHeight * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function drawScene() {
    ctx.clearRect(0, 0, width, height);
    drawStars(ctx, width, height, 500);
    drawLogarithmicSpiral(ctx, centerX, centerY, a, b, maxTheta);
    drawPlanets(ctx, angle);
    drawSatellite(ctx, angle);
    angle += 0.01;
    requestAnimationFrame(drawScene);
}

