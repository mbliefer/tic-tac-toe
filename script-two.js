const gameboard = (() => {
    // DOM

    // create Array for gameboard

    // display which player turn it is

    // reset/start with empty board


    // render

})();

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {
        getName,
        getSymbol
    };
};

const gameplay = (() => {
    const playerX = Player('Player X', 'X');
    const playerO = Player('Player O', 'O');
    // let symbol = switchPlayerTurn();

    // DOM
    const squares = document.querySelectorAll('.square');

    // bind events

    // player picks a square 
    const pickSquare = (e) => {
        target = e.target;
        target.textContent = gameplay.symbol;
        gameplay.switchPlayerTurn();
    }


    function switchPlayerTurn() {
        let symbol = playerX.getSymbol();

        if (symbol === playerX.getSymbol()) {
            symbol = playerO.getSymbol();
        }
        else {
            symbol = playerX.getSymbol();
        }
        return symbol;
    }

    // evaluate board, check for winner

    // bind events
    squares.forEach((square) => {
        square.addEventListener('click', pickSquare)
    })



    return {
    };

})();