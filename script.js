const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);

    let winner = null;

    const addLetterToBoard = (e) => {
        if (e.target.textContent !== "") {
            console.log("nope");
            return;
        }
        let letter = game.switchPlayer().playerTurn.getLetter();
        e.target.textContent = letter;
    }

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

        const squareArrText = squareArr.map(function (square) {
            return square.textContent;
        });

        console.log(squareArrText);

        winArrs.forEach((combo) => {
            if (squareArrText[combo[0]]
                && squareArrText[combo[0]] === squareArrText[combo[1]]
                && squareArrText[combo[0]] === squareArrText[combo[2]]) {
                winner = 'current';
                combo.map(function (square) {
                    squareArr[square].style.backgroundColor = "red";
                })
            }
        });
        return winner || (squareArrText.includes('') ? null : 'Tie');
    };

    const resetBoard = () => {
        const squareArrText = squareArr.map(function (square) {
            location.reload();
        });
    }

    const resetButton = document.querySelector('.resetButton');
    resetButton.addEventListener('click', resetBoard);

    return {
        addLetterToBoard,
        checkWinner,
        squares,
        // squareArr
    };

})();

const Player = (name, letter) => {
    const getName = () => name;
    const getLetter = () => letter;
    return {
        getName,
        getLetter
    };
};

const game = (() => {
    const playerX = Player("PlayerX", "X");
    const playerO = Player("PlayerO", "O");
    let playerTurn = playerO;
    let isThereAWinner = false;

    const switchPlayer = () => {
        displayPlayerTurn(playerTurn);
        playerTurn = (playerTurn === playerX) ? playerO : playerX;
        return {
            playerTurn,
        };
    };

    const displayPlayerTurn = (player) => {
        const h2 = document.querySelector('.displayTurnText');
        h2.textContent = `${player.getName()} it is your turn`
    };

    const round = () => {
        const board = document.querySelector("#board");
        gameboard.checkWinner();

        const evaluateBoard = () => {
            const h2 = document.querySelector('.displayTurnText');
            if (gameboard.checkWinner() === 'Tie') {
                h2.textContent = "Tie";
            }
            if (gameboard.checkWinner() === 'current') {
                console.log('current');
                console.log(playerTurn);
                isThereAWinner = true;
                h2.textContent = `${playerTurn.getName()} is the winner!`;
            };
        }

        board.addEventListener('click', evaluateBoard);
    };

    gameboard.squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            if (isThereAWinner === true) return;
            gameboard.addLetterToBoard(e);
        })
    })

    return {
        switchPlayer,
        round
    }
})();


game.round();

