window.onload = function () {
    console.log("start");
    Calculator.przypisz();
};
var Calculator = {
    buttons: undefined,
    input: undefined,
    m: undefined,
    przypisz: function () {
        this.input = document.getElementById('pls');
        this.buttons = document.querySelectorAll(".butt");
        for (let i = 0; i < this.buttons.length; i++) {
            let eB = this.buttons[i];
            eB.addEventListener("click", Calculator.buttonsClick);
        }
    },
    buttonsClick: function (e) {
        var buttonText = e.target.innerHTML;
        console.log(buttonText);
        switch (buttonText) {
            case '=':
                Calculator.evaluate();
                break;
            case 'MRC':
                Calculator.inputAdd(m);
                break;
            case 'C':
                Calculator.inputC();
                break;
            case 'OFF':
                close();
                break;
            case 'M-':
                m = "";
                break;
            case 'M+':
                m = Calculator.input.innerHTML;
                Calculator.inputC();
                break;
            case 'COPY':
                Calculator.copy();
                break;
            default:
                Calculator.inputAdd(buttonText);
                break;

        }
    },
    inputAdd: function (str) {
        this.input.innerHTML += str;
    },
    inputC: function () {
        this.input.innerHTML = "";
    },
    evaluate: function () {
        Calculator.input.innerHTML = math.evaluate(Calculator.input.innerHTML);
    },
    copy: function () {
        var copyText = document.querySelector("#input").innerHTML;
        copyText.select();
        document.execCommand("copy");
    }
};