import GameLogic from "./GameLogic";

interface Game {
    next_round: boolean;

    initDom(): void;
    again: () => void;
    cancel: () => void;
    createCanvas(): HTMLCanvasElement;
    createButton(name: string, event: (e: { target: unknown }) => void): HTMLElement;
}

class MiniGame implements Game {
    next_round: boolean;

    constructor() {
        this.next_round = false;
    }

    initDom() {
        const game = document.getElementById("minigame");
        if (!game.classList.contains("container_game_start")) {
            game.classList.toggle("container_game_start");
        }
    }

    again = () => {
        this.initDom();
    }

    cancel = () => {
        const container = document.getElementById("minigame");
        container.classList.toggle('container_game_start');
        container.innerHTML = "";
    }

    createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 450;
        canvas.id = "canvas";
        canvas.style.cssText = "width: 300px; height: 450px;";
        return canvas;
    }

    createButton(name: string, event: (e: { target: unknown }) => void ) {
        const button = document.createElement("input");
        button.type = "button";
        button.value = name;
        button.classList.add("game_button");
        button.addEventListener("click", event);
        return button;
    }
}

class Tetris extends MiniGame implements Game {
    game: GameLogic;
    isPaused: boolean;

    constructor() {
        super();
        this.initDom();
        this.next_round = false;
        this.isPaused = false;
    }

    pause = (e: { target: HTMLInputElement }) => {
        const button = e.target;
        if (this.isPaused) {
            this.game.resume();
            this.isPaused = false;
            button.value = "Pause";
        } else {
            this.game.pause();
            this.isPaused = true;
            button.value = "Resume";
        }
    }

    start = () => {
        this.game.run();
    }

    stop = () => {
        this.game.stop();
    }

    restart = () => {
        this.again;
        this.game.run();
    }

    initDom() {
        super.initDom();
        const canvas = this.createCanvas();
        const rules = this.createRules();
        const container = document.getElementById("minigame");
        const buttons = this.createButtons();

        if (container) {
            container.innerHTML = "";
            const ctx = canvas.getContext("2d");
            ctx?.fillRect(0, 0, canvas.width, canvas.height);

            container.appendChild(canvas);
            container.appendChild(rules);
            container.appendChild(buttons);

            canvas.focus();
            this.game = new GameLogic(ctx, canvas);
            document.onkeydown = this.checkKey;
        }
    }

    createRules() {
        const rules = document.createElement('div');
        rules.innerHTML = 
            "<div>Controls:  &#8594; right,  &#8592; left,  &#8593; rotate</div>";
        rules.classList.add('container_game_rules');
        return rules;
    }

    createButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('container_game_controls');
        buttonContainer.appendChild(this.createButton("Start", this.start));
        buttonContainer.appendChild(this.createButton("Pause", this.pause));        
        buttonContainer.appendChild(this.createButton("Stop", this.stop));
        buttonContainer.appendChild(this.createButton("Restart", this.again));

        return buttonContainer;
    }

    checkKey = (e: KeyboardEvent) => {
        e.preventDefault();

        // e = e || window.event;
        let direction = '';

        if (e.code == 'ArrowDown') {
            direction="down";
        } else if (e.code == "ArrowLeft") {
            direction="left";
        } else if (e.code == "ArrowRight") {
            direction="right";
        } else if (e.code == "ArrowUp") {
            direction="up";
        } else {
            return;
        }

        this.game.input(direction);
    }
}

export default Tetris;
