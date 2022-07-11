import GameLogic from "./GameLogic";

interface Game {
    next_round: boolean;

    initDom(): void;
    again: () => void;
    cancel: () => void;
    createCanvas(): HTMLCanvasElement;
    createButton(element: HTMLInputElement, name: string, event: { (): void; (): void; }): void;
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

    createButton(element: HTMLInputElement, name: string, event: { (): void; (): void; }) {
        element.type = "button";
        element.value = name;
        element.classList.add("game__again");
        element.addEventListener("click", event);
    }
}

class Tetris extends MiniGame implements Game {
    game: GameLogic;

    constructor() {
        super();
        this.initDom();
        this.next_round = false;
    }

    initDom() {
        super.initDom();
        const canvas = this.createCanvas();
        const rules = this.createRules();
        const container = document.getElementById("minigame");
        const input_again = document.createElement("input");
        const input_cancel = document.createElement("input");

        this.createButton(input_again, "Again", this.again);
        this.createButton(input_cancel, "Cancel", this.cancel);

        if (container) {
            container.innerHTML = "";
            const ctx = canvas.getContext("2d");
            ctx?.fillRect(0, 0, canvas.width, canvas.height);

            container.appendChild(canvas);
            container.appendChild(rules);
            container.appendChild(input_again);
            container.appendChild(input_cancel);

            canvas.focus();
            this.game = new GameLogic(ctx, canvas);
            document.onkeydown = this.checkKey;
        }
    }

    createRules() {
        const rules = document.createElement('div');
        rules.innerHTML = 
            "<div>Controls</div><div>&#8594; right, &#8592; left, &#8593; rotate</div>";
        rules.classList.add('container_game_rules');
        return rules;
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
