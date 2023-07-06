const gameboard = (() => {
    const squares = document.querySelectorAll(".square");
    const squareArr = Array.from(squares);
    const addLetterToBoard = (e, letter) => {
        e.target.textContent = letter;
    }
    const clickSquares = (letter) => {
        squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                addLetterToBoard(e, letter);
            })
        });
        // squareArr[1].textContent = letter;
        // console.log(squareArr);
        // console.log(squareArr[1]);
    };

    return {clickSquares};

})();

const game = (() => {

})();

const Player = (name, letter) => {
    const getName = () => name;
    const pickSquare = () => gameboard.clickSquares(letter);

    return {
        pickSquare,
        // getName
    };
};

const playerX = Player("PlayerX", "X");
const playerO = Player("PlayerO", "O");
playerX.pickSquare();

// gameboard.logSquares();