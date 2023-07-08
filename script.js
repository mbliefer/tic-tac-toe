const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);
    let playerPicker;

    const addLetterToBoard = (e, letter) => {
        e.target.textContent = letter;
        console.log("addlettertoboard");
    }

    // const clickTest = 

    const clickSquares = (letter) => {
        squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                addLetterToBoard(e, letter);
                console.log("clicksquare");
            })
        });
    };

    const click = () => {
        squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                game.switchPlayer();
                console.log("click");
            });
        });
    }

    return {clickSquares,
        click
        };

})();

const Player = (name, letter) => {
    const getName = () => name;
    const pickSquare = () => {
        gameboard.clickSquares(letter);
        console.log("hi");
    };

    return {
        pickSquare,
        getName
    };
};

const game = (() => {
    const playerX = Player("PlayerX", "X");
    const playerO = Player("PlayerO", "O");

    let playerPicker = playerX;

    function switchPlayer() {
        console.log(playerPicker.getName())
        playerPicker = (playerPicker === playerX) ? playerO : playerX;
        console.log(playerPicker.getName());
        playerPicker.pickSquare();
    };

    gameboard.click();
    playerPicker.pickSquare();


    return {playerPicker, playerO, switchPlayer}

})();
