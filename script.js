const gameboard = (() => {
    const square = document.querySelectorAll(".square");
    const squareArr = Array.from(square);
    const logSquares = () => {
        squareArr[1].textContent = "X";
        console.log(squareArr);
        console.log(squareArr[1]);
    };

    return {logSquares};

})();

gameboard.logSquares();