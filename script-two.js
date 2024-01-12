const gameboard = (() => {
    // DOM
    const reset = document.querySelector('.resetButton')
    const squares = document.querySelectorAll('.square');

    // create Array for gameboard

    // display which player turn it is

    // evaluate board, check for winner

    // reset

    // bind events
    squares.forEach((square) => {
        square.addEventListener('click', gameplay.pickSquare)
    });

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
        let playerTurn = playerX;


        // DOM
        const squares = document.querySelectorAll('.square');

        // player picks a square 
        const pickSquare = (e) => {
            target = e.target;
            target.textContent = playerTurn.getSymbol();
            switchPlayerTurn(playerTurn);
        }

        const switchPlayerTurn = (player) => {
            if (player === playerX) {
                playerTurn = playerO;
            }
            else { playerTurn = playerX; }
        }

        // reset board
        const resetBoard = () => {

        }




        // bind events
        // squares.forEach((square) => {
        //     square.addEventListener('click', pickSquare)
        // });



        return {
            pickSquare
        };

    })();