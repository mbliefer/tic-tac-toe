const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);

    let winner = null;

    const addLetterToBoard = (e) => {
        let letter = game.switchPlayer().playerTurn.getLetter();
        // let letter = game.playerTurn.getLetter();
        e.target.textContent = letter;
        console.log("addlettertoboard");
        // game.switchPlayer();
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

        const squareArrText = squareArr.map(function(square) {
            return square.textContent;
        });
    
        console.log(squareArrText);

        winArrs.forEach((combo) => {
            if (squareArrText[combo[0]]
                && squareArrText[combo[0]] === squareArrText[combo[1]]
                && squareArrText[combo[0]] === squareArrText[combo[2]]) {
                winner = 'current';
                console.log('winner');
            }
        });
        return winner || (squareArrText.includes('') ? null : 'Tie');

    };

    return {
        addLetterToBoard,
        checkWinner,
        squares, 
        squareArr
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

    const switchPlayer = () => {
        displayPlayerTurn(playerTurn);
        console.log(playerTurn.getName())
        playerTurn = (playerTurn === playerX) ? playerO : playerX;
        console.log(playerTurn.getName());
        return {
            playerTurn,
        };
    };

    // function switchPlayer() {
    //     this.playerTurn === playerO ? this.playerTurn = playerX : this.playerTurn = playerO;
    //     playerTurn = (playerTurn === playerX) ? playerO : playerX;
    // };

    const displayPlayerTurn = (player) => {
        const displayTurn = document.querySelector('.displayTurn');
        const h2 = document.querySelector('.displayTurnText');
        h2.textContent = `${player.getName()} it is your turn`
    };

    const round = () => {
        const board = document.querySelector("#board");
        gameboard.checkWinner();

        console.log("hi");
        const evaluateBoard = () => {
            if (gameboard.checkWinner() == null) {
                console.log("null");
            }
            else console.log("hmm");
        }
        
        board.addEventListener('click', evaluateBoard);
    };

    gameboard.squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            gameboard.addLetterToBoard(e);
        })
    })

    return {
        switchPlayer,
        round
    }

})();

game.round();

