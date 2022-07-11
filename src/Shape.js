
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
            'blue',
            'orange',
            'purple'
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

    frameDim() {
        let num = 3;
        if (this.shapeType == 1 || this.shapeType == 2) {
            num = 4;
        }
        return num;
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
        let num = this.frameDim();
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

export default Shape;
