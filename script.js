document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded');
    let shapes = [];
    let currentShape;
    let height = 15;
    let width = 10;
    let state = 1;      // 1 running - 0 paused - 2 game over
    let colors = ['black', 'orange', 'red', 'blue'];
    let move = 0;
    let occupiedblocks = [];
    let direction = "";
    let points = 0;

    let board;

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    document.onkeydown = checkKey;

    function init() {
        // const canvas = document.querySelector('#canvas');
        // const ctx = canvas.getContext("2d");

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        board = new Board(canvas.height, canvas.width);
        board.init();
        board.addShape();
        board.drawShape();

        // document.onkeydown = checkKey;

    }

    function moveShape(direction) {
        console.log(direction);
    }

    function checkKey(e) {
        e.preventDefault();

        e = e || window.event;
        direction = '';

        if (e.keyCode == '40') {
            direction="down";
        } else if (e.keyCode == "37") {
            direction="left";
        } else if (e.keyCode == "39") {
            direction="right";
        } else {
            return;
        }

        // this.currentShape.move(direction);
        // this.drawShape();
        board.clearShape();
        board.currentShape.move(direction);
        board.drawShape();
        moveShape(direction);
    }

    class BoardPixel {
        constructor(xPosition, yPosition, pSize) {
            this.x = xPosition*pSize;
            this.y = yPosition*pSize;
            this.pSize = pSize;
            this.type = 0;
        }

        clearPixel() {
            ctx.fillStyle = 'black';
            ctx.fillRect(this.x, this.y, this.pSize, this.pSize);

            this.renderPixel();
        }

        renderPixel() {
            ctx.strokeStyle = 'white';
            ctx.strokeRect(this.x, this.y, this.pSize, this.pSize);
        }

        fillPixel(color) {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.pSize, this.pSize);

            this.renderPixel();
        }
    }

    class Shape {
        constructor(shapeType, shapeColor) {
            const shapes = [
                [[1, 0], [0, 1], [1, 1], [2, 1]], // angle shape
                [[0, 0], [0, 1], [0, 2], [0, 3]], // line
                [[0, 0], [0, 1], [1, 0], [1, 1]], // square
                [[2, 0], [0, 1], [1, 1], [2, 1]] // L shape
            ];
            const colors = [
                'green',
                'red',
                'blue'
            ];

            this.shape = shapes[shapeType];
            this.location = [0, 0]; // horizontal, vertical
            // this.pixelArray = arr;
            this.color = colors[shapeColor];
        }

        move(direction) {
            if (direction == "down") {
                this.location[1]++;
            } else if (direction == "left") {
                this.location[0]--;
            } else if (direction == "right") {
                this.location[0]++;
            }
        }

        getBlockLocation() {
            let blockLocation = [];
            for (let i = 0; i < this.shape.length; i++) {
                let x = this.shape[i][0] + this.location[0];
                let y = this.shape[i][1] + this.location[1];
                blockLocation.push([y, x]);
            }
            return blockLocation;
        }

        turnRight() {

        }

        turnLeft() {

        }
    }

    class Board {
        constructor(height, width) {
            this.columnNum = 10;
            this.rowNum = 15;
            this.pHeight = height/this.rowNum;
            this.pWidth = width/this.columnNum;
            this.pSize = (this.pHeight > this.pWidth) ? this.pWidth : this.pHeight;
            this.pixels = new Array();

            this.currentShape = this.addShape();
        }

        init() {
            for (let j = 0; j < this.rowNum; j++) {
                let row = [];
                for (let i = 0; i < this.columnNum; i++) {
                    let newpixel = new BoardPixel(i, j, this.pSize);
                    row.splice(i, 0, newpixel);
                    // this.pixels[j][i] = newpixel;
                    newpixel.renderPixel();
                }
                this.pixels.splice(j, 0, row);
            }
        }

        clearShape() {
            let locationArray = this.currentShape.getBlockLocation();
            locationArray.forEach(shapePixel => {
                let pixel = this.pixels[shapePixel[0]][shapePixel[1]];
                pixel.type = 1;
                pixel.clearPixel();
            });
        }

        drawShape() {
            let locationArray = this.currentShape.getBlockLocation();
            locationArray.forEach(shapePixel => {
                let pixel = this.pixels[shapePixel[0]][shapePixel[1]];
                pixel.fillPixel(this.currentShape.color);
            });
        }

        addShape() {
            let randomShape = Math.floor(Math.random() * 4);
            let randomColor = Math.floor(Math.random() * 3);
            // this.currentShape = new Shape(randomShape, randomColor);
            return new Shape(randomShape, randomColor);
        }
    }

    init();
});
