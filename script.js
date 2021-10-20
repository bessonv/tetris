document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded');
    let direction = "";
    let game;

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    document.onkeydown = checkKey;

    function init() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        game = new GameLogic(canvas);
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
        } else if (e.keyCode == "38"){
            direction="up";
        } else {
            return;
        }

        game.input(direction);
    }

    class BoardPixel {
        constructor(xPosition, yPosition, pSize) {
            this.x = xPosition*pSize;
            this.y = yPosition*pSize;
            this.pSize = pSize;
            this.type = 0;
            this.color = 'black';
        }

        clearPixel() {
            this.color = 'black';
            this.renderPixel();
        }

        renderPixel() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.pSize, this.pSize);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(this.x, this.y, this.pSize, this.pSize);
        }

        fillPixel(color) {
            this.color = color;
            this.renderPixel();
        }
    }

    class Shape {
        constructor(shapeType, shapeColor) {
            const shapes = [
                [[1, 0], [0, 1], [1, 1], [2, 1]], // angle shape 3x3
                [[1, 0], [1, 1], [1, 2], [1, 3]], // line 4x4
                [[1, 1], [1, 2], [2, 1], [2, 2]], // square 2x2
                [[2, 0], [0, 1], [1, 1], [2, 1]], // L shape 3x3
                [[0, 0], [0, 1], [1, 1], [1, 2]]  // tetris shape 3x3
            ];
            const colors = [
                'green',
                'red',
                'blue'
            ];

            this.shapeType = shapeType;
            this.shape = shapes[shapeType];
            this.location = [0, 0]; // horizontal, vertical
            this.newlocation = [0, 0];
            this.color = colors[shapeColor];
            this.fixed = false;
        }

        moveLeft() {
            this.newlocation[0]--;
        }

        moveRight() {
            this.newlocation[0]++;
        }

        moveDown() {
            this.newlocation[1]++;
        }

        moveToLocation(row, col) {
            this.location = [col, row];
        }

        updateLocation() {
            this.location = this.newlocation.slice();
        }

        getNewLocation(direction) {
            this.newlocation = this.location.slice();
            if (direction == "down") {
                this.moveDown();
            } else if (direction == "left") {
                this.moveLeft();
            } else if (direction == "right") {
                this.moveRight();
            } else if (direction == "up") {
                this.rotate();
            }
            return this.newlocation;
        }

        getBlockLocation(loc) {
            let blockLocation = [];
            for (let i = 0; i < this.shape.length; i++) {
                let x = this.shape[i][0] + loc[0];
                let y = this.shape[i][1] + loc[1];
                blockLocation.push([y, x]);
            }
            return blockLocation;
        }

        rotate() {
            let transposed = [];
            this.shape.forEach(pixel => {
                transposed.push([pixel[1], pixel[0]]);
            });
            let reversed = [];
            let num = 3;
            if (this.shapeType == 1 || this.shapeType == 2) {
                num = 4;
            }
            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    transposed.forEach(pixel => {
                        if (pixel[0] == i && pixel[1] == j) {
                            reversed.push([i, num - 1 - j]);
                        }
                    });
                    
                }
            }
            this.shape = reversed.slice();
        }

        turnRight() {
            this.rotate();
        }

        turnLeft() {
            this.rotate();
        }
    }

    class GameLogic {
        constructor(canvas) {
            this.gameStatus;
            this.board = new Board(canvas.height, canvas.width);
            this.board.init();
            this.gameloop;

            this.run();
        }

        input(direction) {
            this.board.clearShape();
            this.board.moveShape(direction);
            this.board.drawShape();
        }

        run() {
            this.board.addShape();
            this.board.drawShape();
            this.gameStatus = 'running';
            setInterval(() => {
                if (this.gameStatus == 'running') {
                    this.input("down");
                }
                if (this.board.currentShape.fixed) {
                    this.board.checkRows();
                    this.board.addShape();
                    this.board.drawShape();
                }
            }, 700);
        }

        pause() {
            this.gameStatus = 'paused';
        }

        resume() {
            this.gameStatus = 'running';
        }

        restart() {

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
            this.currentShape;
        }

        init() {
            for (let j = 0; j < this.rowNum; j++) {
                let row = [];
                for (let i = 0; i < this.columnNum; i++) {
                    let newpixel = new BoardPixel(i, j, this.pSize);
                    row.splice(i, 0, newpixel);
                    newpixel.renderPixel();
                }
                this.pixels.splice(j, 0, row);
            }
            this.addShape();
        }

        clearShape() {
            let locationArray = this.currentShape.getBlockLocation(this.currentShape.location);
            locationArray.forEach(shapePixel => {
                let pixel = this.pixels[shapePixel[0]][shapePixel[1]];
                pixel.type = 0;
                pixel.clearPixel();
            });
        }

        drawShape() {
            let locationArray = this.currentShape.getBlockLocation(this.currentShape.location);
            locationArray.forEach(shapePixel => {
                let pixel = this.pixels[shapePixel[0]][shapePixel[1]];
                pixel.type = 1;
                pixel.fillPixel(this.currentShape.color);
            });
        }

        addShape() {
            let randomShape = Math.floor(Math.random() * 5);
            let randomColor = Math.floor(Math.random() * 3);
            this.currentShape = new Shape(randomShape, randomColor);
            this.currentShape.moveToLocation(0, Math.floor(this.columnNum/2) - 1);
        }

        moveShape(direction) {
            let location = this.currentShape.getNewLocation(direction);
            let locationArray = this.currentShape.getBlockLocation(location);
            if (this.hasShapeCollision(locationArray)) {
                this.currentShape.fixed = true;
                // this.checkRows();
            } else if (!this.hasWallCollision(locationArray)) {
                this.currentShape.updateLocation();
            }
        }

        checkRows() {
            let rowsToClear = [];
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

        redrawPixelArray(borderrow) {
            for (let row = this.pixels.length; row > 0; row--) {
                if (row < borderrow) {
                    for (let col = 0; col < this.pixels[row].length; col++) {
                        let pixel = this.pixels[row][col];
                        this.pixels[row+1][col].type = pixel.type;
                        this.pixels[row+1][col].color = pixel.color;
                        this.pixels[row+1][col].renderPixel();
                    }
                }
                
            }
        }

        hasWallCollision(location) {
            let collision = false;
            location.forEach(shapePixel => {
                if (shapePixel[1] < 0 || shapePixel[1] > this.columnNum - 1) {
                    collision = true;
                }
            });
            return collision;
        }

        hasShapeCollision(location) {
            let collision = false;
            // let currentlocation = this.currentShape.getBlockLocation(this.currentShape.location);
            // let intersection = location.filter(pixel => currentlocation.every((value, index) => {return value === location[index]}));
            // console.log(this.intersection(location, currentlocation));
            location.forEach(shapePixel => {
                if (shapePixel[0] > this.rowNum - 1) {
                    collision = true;
                } else {
                    let pixel = this.pixels[shapePixel[0]][shapePixel[1]];
                    if (pixel.type == 1) {
                        collision = true;
                    }
                }
            });
            return collision;
        }

        intersection(location, currentlocation) {
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

    init();
});
