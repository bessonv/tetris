import Board from "./Board";

class GameLogic {
    constructor(ctx, canvas) {
        this.gameStatus;
        this.board = new Board(ctx, canvas.height, canvas.width);
        this.board.init();
        this.gameloop;
        this.ctx = ctx;

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
                if (this.board.currentShape.fixed) {
                    this.board.checkRows();
                    this.board.addShape();
                    if (this.board.loseState) {
                        this.stop();
                        
                    }
                    this.board.drawShape();
                }
                console.log(this.board);
            }
        }, 700);
    }

    stop() {
        this.gameStatus = 'stop';
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

export default GameLogic;
