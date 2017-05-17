/// <reference path="ball.ts"/>
class Game {
    
    // geef hier de ball instance een naam
    // ...

   
    
    constructor() {
        
        // maak hier een ball instance
        // ...
        let ball : Ball = new Ball;
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
        ///
        move(){

        }
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 