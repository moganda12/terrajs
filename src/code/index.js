function drawImage(ctx, path, width, height, x, y) {
    const img = new Image(); /* Create new img element*/

    img.addEventListener("load", () => {
        ctx.drawImage(img, x, y, width, height);
    });

    img.src = "./../assets/" + path; /* Set source path */
};

const canvasElement = document.createElement('canvas');

canvasElement.width = window.innerWidth;

document.body.appendChild(canvasElement);

const canvas = canvasElement.getContext('2d');

canvas.imageSmoothingEnabled = false;

drawImage(canvas, "Splash_0.png", canvasElement.width, canvasElement.height, 0, 0);

window.addEventListener("resize", () => {
    canvasElement.width = window.innerWidth;
    drawImage(canvas, "Splash_0.png", canvasElement.width, canvasElement.height, 0, 0);
});
