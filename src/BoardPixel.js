
class BoardPixel {
    constructor(xPosition, yPosition, pSize) {
        this.x = xPosition*pSize;
        this.y = yPosition*pSize;
        this.pSize = pSize;
        this.type = 0;
        this.color = 'black';
    }

    clearPixel(ctx) {
        this.color = 'black';
        this.renderPixel(ctx);
    }

    renderPixel(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.pSize, this.pSize);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, this.pSize, this.pSize);
    }

    fillPixel(ctx, color) {
        this.color = color;
        this.renderPixel(ctx);
    }
}

export default BoardPixel;
