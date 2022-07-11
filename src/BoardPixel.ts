
interface BoardPixel {
    x: number;
    y: number;
    pSize: number;
    type: number;
    color: string;

    clearPixel(ctx: CanvasRenderingContext2D): void;
    renderPixel(ctx: CanvasRenderingContext2D): void;
    fillPixel(ctx: CanvasRenderingContext2D, color: string): void;
}

class BoardPixel implements BoardPixel {
    constructor(xPosition: number, yPosition: number, pSize: number) {
        this.x = xPosition*pSize;
        this.y = yPosition*pSize;
        this.pSize = pSize;
        this.type = 0;
        this.color = 'black';
    }

    clearPixel(ctx: CanvasRenderingContext2D) {
        this.color = 'black';
        this.renderPixel(ctx);
    }

    renderPixel(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.pSize, this.pSize);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, this.pSize, this.pSize);
    }

    fillPixel(ctx: CanvasRenderingContext2D, color: string) {
        this.color = color;
        this.renderPixel(ctx);
    }
}

export default BoardPixel;
