import BoardPixel from "./BoardPixel";
import Shape from "./Shape";

interface Board {
    columnNum: number;
    rowNum: number;
    pHeight: number;
    pWidth: number;
    pSize: number;
    pixels: Array<Array<BoardPixel>>;
    loseState: boolean;
    currentShape: Shape;
    ctx: CanvasRenderingContext2D;

    init(): void;
    clearShape(): void;
    drawShape(): void;
    addShape(): void;
    moveShape(direction: string): void;
    checkRows(): void;
    redrawPixelArray(borderrow: number): void;
    getPixelTyoe(coords: number[]): void;
    setPixelType(coords: number[], type: number): void;
    hasWallCollision(location: number[][]): boolean;
    hasShapeCollision(location: number[][]): boolean;
    intersection(location: number[][], currentlocation: number[][]): boolean;
}

class Board implements Board{ 
    constructor(ctx: CanvasRenderingContext2D, height: number, width: number) {
        this.columnNum = 10;
        this.rowNum = 15;
        this.pHeight = height/this.rowNum;
        this.pWidth = width/this.columnNum;
        this.pSize = (this.pHeight > this.pWidth) ? this.pWidth : this.pHeight;
        this.pixels = [];
        this.loseState = false;
        this.currentShape;
        this.ctx = ctx;
    }

    init() {
        for (let j = 0; j < this.rowNum; j++) {
            const row: Array<BoardPixel> = [];
            for (let i = 0; i < this.columnNum; i++) {
                const newpixel = new BoardPixel(i, j, this.pSize);
                row.splice(i, 0, newpixel);
                newpixel.renderPixel(this.ctx);
            }
            this.pixels.splice(j, 0, row);
        }
        this.addShape();
    }

    clearShape() {
        const locationArray = this.currentShape.getBlockLocation(this.currentShape.location);
        locationArray.forEach(shapePixel => {
            const pixel = this.setPixelType(shapePixel, 0);
            if (pixel) {
                pixel.clearPixel(this.ctx);
            }
        });
    }

    drawShape() {
        const locationArray = this.currentShape.getBlockLocation(this.currentShape.location);
        locationArray.forEach(shapePixel => {
            const pixel = this.setPixelType(shapePixel, 1);
            if (pixel) {
                pixel.fillPixel(this.ctx, this.currentShape.color);
            }
        });
    }

    addShape() {
        const randomShape = Math.floor(Math.random() * 5);
        const randomColor = Math.floor(Math.random() * 5);
        this.currentShape = new Shape(randomShape, randomColor);
        let offset = -1;
        if (this.currentShape.frameDim() > 3) {
            offset = -3;
        }
        this.currentShape.moveToLocation(offset, Math.floor(this.columnNum/2) - 1);
        const locationArray = this.currentShape.getBlockLocation(this.currentShape.location);
        if (this.hasShapeCollision(locationArray)) {
            this.loseState = true;
        }
    }

    moveShape(direction: string) {
        const location = this.currentShape.getNewLocation(direction);
        const locationArray = this.currentShape.getBlockLocation(location);
        if (this.hasShapeCollision(locationArray)) {
            this.currentShape.fixed = true;
        } else if (!this.hasWallCollision(locationArray)) {
            this.currentShape.updateLocation();
        }
    }

    checkRows() {
        const rowsToClear: Array<number> = [];
        for (let row = 0; row < this.pixels.length; row++) {
            let filledLine = true;
            for (let column = 0; column < this.pixels[row].length; column++) {
                if (this.pixels[row][column].type == 0) {
                    filledLine = false;
                }                    
            }
            if (filledLine) {
                rowsToClear.push(row);
            }
        }
        rowsToClear.forEach(row => {
            this.redrawPixelArray(row);
        });
    }

    redrawPixelArray(borderrow: number) {
        for (let row = this.pixels.length; row > 0; row--) {
            if (row < borderrow) {
                for (let col = 0; col < this.pixels[row].length; col++) {
                    const pixel = this.pixels[row][col];
                    this.pixels[row+1][col].type = pixel.type;
                    this.pixels[row+1][col].color = pixel.color;
                    this.pixels[row+1][col].renderPixel(this.ctx);
                }
            }

        }
    }

    getPixelTyoe(coords: number[]) {
        if (coords[0] >= 0 && coords[1] >= 0) {
            const pixel = this.pixels[coords[0]][coords[1]];
            return pixel.type;
        }
        return null;
    }
    
    setPixelType(coords: number[], type: number) {
        if (coords[0] >= 0 && coords[1] >= 0) {
            const pixel = this.pixels[coords[0]][coords[1]];
            pixel.type = type;
            return pixel;
        } else {
            return null;
        }
    }

    hasWallCollision(location: number[][]) {
        let collision = false;
        location.forEach(shapePixel => {
            if (shapePixel[1] < 0 || shapePixel[1] > this.columnNum - 1) {
                collision = true;
            }
        });
        return collision;
    }

    hasShapeCollision(location: number[][]) {
        let collision = false;
        // let currentlocation = this.currentShape.getBlockLocation(this.currentShape.location);
        // let intersection = location.filter(pixel => currentlocation.every((value, index) => {return value === location[index]}));
        // console.log(this.intersection(location, currentlocation));
        location.forEach(shapePixel => {
            if (shapePixel[0] > this.rowNum - 1) {
                collision = true;
            } else {
                if (this.getPixelTyoe(shapePixel) == 1) {
                    collision = true;
                }
            }
        });
        return collision;
    }

    intersection(location: number[][], currentlocation: number[][]) {
        let intersection = false;
        location.forEach(pixel => {
            currentlocation.forEach(curpixel => {
                if ((pixel[0] == curpixel[0]) && (pixel[1] == curpixel[1])) {
                    intersection = true;
                }
            });
        });
        return intersection;
    }
}

export default Board;
