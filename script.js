const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);

    const addLetterToBoard = (e) => {
        let letter = game.switchPlayer().playerTurn.getLetter();
        // let letter = game.playerTurn.getLetter();
        e.target.textContent = letter;
        console.log("addlettertoboard");
        // game.switchPlayer();
    }

    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            addLetterToBoard(e);
        })
    })

    return {
        addLetterToBoard
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

    return {
        switchPlayer,
    }

})();

