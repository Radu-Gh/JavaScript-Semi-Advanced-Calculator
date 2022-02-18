const power = document.querySelector('#pow');
const root = document.querySelector('#root');
const clear = document.querySelector('#clear');
const backSpace = document.querySelector('#backspace');

const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');
const multiply = document.querySelector('#multiply');

const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const subtract = document.querySelector('#subtract');

const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const add = document.querySelector('#add');

const point = document.querySelector('#point');
const digit0 = document.querySelector('#digit0');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');


const equation = document.querySelector('#equation');
const result = document.querySelector('.result');

let firstNumber= 0;
let secondNumber= 0;
let operator = '';
let decimal = false;
let decimalPos = 0;

let isFirstNumber = true;

function buildNumber(digit){
    if(decimal){
        if(isFirstNumber) {
            decimalPos++;
            firstNumber = firstNumber * Math.pow(10,decimalPos) + digit;
            firstNumber = firstNumber / Math.pow(10,decimalPos);
            result.innerText = firstNumber;

        } else {
            
            decimalPos++;
            secondNumber = secondNumber * Math.pow(10,decimalPos) + digit;
            secondNumber = secondNumber / Math.pow(10,decimalPos);
            result.innerText = secondNumber;
        }
        if(digit == 0 && decimalPos == 1){
            result.innerText=result.innerText + '.' + '0';
        }
    }else{

        if(isFirstNumber) {
            firstNumber = firstNumber * 10 + digit;
            result.innerText = firstNumber;
        } else {
            secondNumber = secondNumber * 10 + digit;
            result.innerText = secondNumber;
        }
    }

};


digit0.addEventListener( 'click', function() {
    buildNumber(0);
});

digit1.addEventListener( 'click', function() {
    buildNumber(1);
});

digit2.addEventListener( 'click', function() {
    buildNumber(2);
});

digit3.addEventListener( 'click', function() {
    buildNumber(3);
});

digit4.addEventListener( 'click', function() {
    buildNumber(4);
});

digit5.addEventListener( 'click', function() {
    buildNumber(5);
});

digit6.addEventListener( 'click', function() {
    buildNumber(6);
}); 

digit7.addEventListener( 'click', function() {
    buildNumber(7);
});

digit8.addEventListener( 'click', function() {
    buildNumber(8);
});

digit9.addEventListener( 'click', function() {
    buildNumber(9);
});

function solveIt() {
    
    switch (operator){
        case '+':
            res = firstNumber + secondNumber;
            break;
        case '-':
            res = firstNumber - secondNumber;
            break;
        case '*':
            res = firstNumber * secondNumber;
            break;
        case '/':
            res = firstNumber / secondNumber;
            break;
        case '^':
            res = Math.pow(firstNumber,secondNumber);
            break;
        case "root":
            res = Math.pow(firstNumber, 1/secondNumber);    
            equation.innerText = secondNumber + '√' + firstNumber;
            return res;
        default:
            res = 0;
            break;
    }

    equation.innerText = equation.innerText + secondNumber;

    return res;
}

add.addEventListener( 'click', function(){
    
    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = '+';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = firstNumber + operator;

    }else{
        firstNumber = solveIt();
        operator = '+'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = firstNumber + operator;

    }
});

subtract.addEventListener( 'click', function() {
    
    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = '-';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = firstNumber + operator;

    }else{
        firstNumber = solveIt();
        operator = '-'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = firstNumber + operator;

    }
});

multiply.addEventListener( 'click', function() {

    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = '*';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = firstNumber + operator;

    }else{
        firstNumber = solveIt();
        operator = '*'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = firstNumber + operator;

    }

});

divide.addEventListener( 'click', function() {

    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = '/';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = firstNumber + operator;

    }else{
        firstNumber = solveIt();
        operator = '/'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = firstNumber + operator;

    }

});

power.addEventListener( 'click', function() {

    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = '^';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = firstNumber + operator;

    }else{
        firstNumber = solveIt();
        operator = '^'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = firstNumber + operator;

    }

});

root.addEventListener( 'click', function() {

    if(isFirstNumber != false){
        isFirstNumber = false;
        operator = 'root';
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        equation.innerText = '√' + firstNumber;
    }else{
        firstNumber = solveIt();
        operator = 'root'
        result.innerText = operator;
        decimal = false;
        decimalPos = 0;
        secondNumber = 0;
        equation.innerText = '√' + firstNumber;
    }

});

equals.addEventListener( 'click', function(){
    let res = 0;
    res = solveIt();
    equation.innerText = equation.innerText + '=';
    result.innerText = res;
    firstNumber = res;
    isFirstNumber = true;
    secondNumber = 0;
    operator = '';
    decimal = false;
    decimalPos = 0;
});

point.addEventListener( 'click', function(){
    if( decimal != true ){
        decimal = true;
        result.innerText = result.innerText + '.';
    }
})

backSpace.addEventListener( 'click', function() {
    
    if(decimal){
        if(!isFirstNumber) {
            secondNumber = secondNumber * Math.pow(10,decimalPos);
            decimalPos--;
            secondNumber = secondNumber / 10 | 0;
            secondNumber = secondNumber / Math.pow(10,decimalPos);
            result.innerText = secondNumber;
            
        } else {
            
            firstNumber = firstNumber * Math.pow(10,decimalPos);
            decimalPos--;
            firstNumber = firstNumber / 10 | 0;
            firstNumber = firstNumber / Math.pow(10,decimalPos);
            result.innerText = firstNumber;
        }

        if(decimalPos == 0)
            decimal = false;

    }else{

        if(!isFirstNumber) {
            secondNumber = secondNumber / 10 | 0;
            result.innerText = secondNumber;
            
        } else {
            
            firstNumber = firstNumber / 10 | 0;
            result.innerText = firstNumber;
        }
    }
});

clear.addEventListener( 'click', function() {
    
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    decimal = false;
    decimalPos = 0;
    isFirstNumber = true;
    result.innerText = firstNumber;
    equation.innerText = '';
});


/*JS code for the awesome particle effect
*/


particlesJS("particles-js", {
    
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 710.2665077774184 }
      },

      color: { value: "#102212" },

      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },

      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },

      size: {
        value: 2,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },

      line_linked: {
        enable: true,
        distance: 176.26510271448274,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },

      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },


    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },

      modes: {
        grab: { distance: 150, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },

    retina_detect: true
  });
  
var update;
  
update = function () {
    requestAnimationFrame(update);
};
  
requestAnimationFrame(update);