const gameboard = (() => {
    // DOM
    const squares = document.querySelectorAll('.square');

    let winner = null;


    // create Array for gameboard
    let board = [];

    const placeSymbol = (e) => {
        if (e.target.textContent !== '') return

        let index = e.target.dataset.position;
        board[index] = gameplay.getPlayerTurnSymbol();

        gameplay.pickSquare(e);
        if (checkWinner() !== null) return
        console.log(winner);
        gameplay.displayPlayerTurn();
    }

    // evaluate board, check for winner
    const checkWinner = () => {
        winArrs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        winArrs.forEach((combo) => {
            if (board[combo[0]]
                && board[combo[0]] === board[combo[1]]
                && board[combo[0]] === board[combo[2]]) {
                    winner = gameplay.getPlayerTurnName();
                    combo.map((square) => {
                        board[square].style.backgroundColor = "red";
                    });
    
                }
        });

        let boardText = board.map((index) => index);
        return winner || ((board.length === 9 && !boardText.includes(undefined)) ? 'tie' : null);
    };

    // reset
    const resetBoard = () => {
        board = [];
        winner = null;
        squares.forEach((square) => {
            square.textContent = "";
        });
    };

    // bind events
    squares.forEach((square) => {
        square.addEventListener('click', placeSymbol)
    });

    return {
        resetBoard,
        checkWinner,
    }

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
    const getPlayerTurnSymbol = () => playerTurn.getSymbol();
    const getPlayerTurnName = () => playerTurn.getName();

    // DOM
    const playerTurnText = document.querySelector('.displayTurnText')
    const reset = document.querySelector('.resetButton')

    const switchPlayerTurn = (player) => {
        playerTurn = (playerTurn === playerX) ? playerO : playerX;
    }

    // display which player turn it is
    const displayPlayerTurn = () => {
        playerTurnText.textContent = getPlayerTurnName() + " it is your turn";
    }

    const pickSquare = (e) => {
        e.target.textContent = getPlayerTurnSymbol();
        evaluateBoard();
        switchPlayerTurn(playerTurn);
    }

    const evaluateBoard = () => {
        if (gameboard.checkWinner() === 'tie') {
            playerTurnText.textContent = 'Scratch';
        }
        else if (gameboard.checkWinner() !== 'tie' || gameboard.checkWinner() !== null) {
            playerTurnText.textContent = gameboard.checkWinner() + " Wins!";
        }
    }

    const resetPlayerTurnToX = () => {
        playerTurn = playerX;
        displayPlayerTurn();
    };

    // bind events
    reset.addEventListener('click', () => {
        gameboard.resetBoard();
        resetPlayerTurnToX();
    } );

    return {
        pickSquare,
        getPlayerTurnSymbol,
        getPlayerTurnName,
        displayPlayerTurn,
    };

})();