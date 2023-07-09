const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);

    const addLetterToBoard = (e) => {
        let letter = game.switchPlayer().playerPicker.getLetter();
        e.target.textContent = letter;
        console.log("addlettertoboard");
    }

    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            addLetterToBoard(e);
            console.log(game.counter);
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

    let playerPicker = playerO;
    let counter = 0;

    const switchPlayer = () => {
        console.log(playerPicker.getName())
        playerPicker = (playerPicker === playerX) ? playerO : playerX;
        console.log(playerPicker.getName());
        return {
            playerPicker,
        };
    };


    return { 
        playerPicker, 
        switchPlayer,
        counter}

})();

