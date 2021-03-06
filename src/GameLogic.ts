import Board from "./Board";

interface GameLogic {
    gameStatus: 'running' | 'pause' | 'stop';
    board: Board;
    gameloop: number;
    ctx: CanvasRenderingContext2D;

    input(direction: string): void;
    run(): void;
    stop(): void;
    pause(): void;
    resume(): void;
}

class GameLogic implements GameLogic{
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.gameStatus;
        this.board = new Board(ctx, canvas.height, canvas.width);
        this.board.init();
        this.gameloop;
        this.ctx = ctx;
    }

    input(direction: string) {
        this.board.clearShape();
        this.board.moveShape(direction);
        this.board.drawShape();
    }

    run() {
        this.board.addShape();
        this.board.drawShape();
        this.gameStatus = 'running';
        const mainLoop: ReturnType<typeof setInterval> = setInterval(() => {
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
            if (this.gameStatus == 'stop') {
                this.board.clearShape();
                this.board.init();
                return clearInterval(mainLoop);
            }
            if (this.gameStatus == 'pause') {
                console.log(this.board, this.gameStatus);
            }
        }, 700);
    }

    stop() {
        this.gameStatus = 'stop';
    }

    pause() {
        this.gameStatus = 'pause';
    }

    resume() {
        this.gameStatus = 'running';
    }

    // restart() {

    // }
}

export default GameLogic;
