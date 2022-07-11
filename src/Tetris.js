import GameLogic from "./GameLogic";

class MiniGame {
    constructor() {
        this.next_round = false;
    }

    initDom() {
        let game = document.getElementById("minigame");
        if (!game.classList.contains("container_game_start")) {
            game.classList.toggle("container_game_start");
        }
    }

    again = () => {
        this.initDom();
    }

    cancel = () => {
        let container = document.getElementById("minigame");
        container.classList.toggle('container_game_start');
        container.innerHTML = "";
    }

    createCanvas() {
        let canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 450;
        canvas.id = "canvas";
        canvas.style.cssText = "width: 300px; height: 450px;";
        return canvas;
    }

    createButton(element, name, event) {
        element.type = "button";
        element.value = name;
        element.classList.add("game__again");
        element.addEventListener("click", event);
    }
}

class Tetris extends MiniGame{
    constructor() {
        super();
        this.initDom();
        this.next_round = false;
    }

    initDom() {
        super.initDom();
        let canvas = this.createCanvas();
        let rules = this.createRules();
        let container = document.getElementById("minigame");
        let input_again = document.createElement("input");
        let input_cancel = document.createElement("input");

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
        let rules = document.createElement('div');
        rules.innerHTML = 
            "<div>Controls</div><div>&#8594; right, &#8592; left, &#8593; rotate</div>";
        rules.classList.add('container_game_rules');
        return rules;
    }

    checkKey = e => {
        e.preventDefault();

        e = e || window.event;
        let direction = '';

        if (e.keyCode == '40') {
            direction="down";
        } else if (e.keyCode == "37") {
            direction="left";
        } else if (e.keyCode == "39") {
            direction="right";
        } else if (e.keyCode == "38") {
            direction="up";
        } else {
            return;
        }

        this.game.input(direction);
    }
}

export default Tetris;
