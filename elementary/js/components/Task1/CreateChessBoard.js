function CreateChessBoard() {


  this.validateChessBoard = function (data) {
    let error = {
      status: false,
      reason: ''
    };
    let height = Number(data.height);
    let width = Number(data.width);

    if (!Number.isInteger(height) || !Number.isInteger(width)) {
      error.reason = 'You can use only integer numbers!';

      return error;
    } else if (width < 2 || height < 2) {
      error.reason = 'Height and width must be > 1';

      return error;
    } else if (data.symbol.length > 1 || data.symbol === ' ' || data.symbol === '') {
      error.reason = 'You can use any one symbol, space not allowed!';

      return error;
    }
    return true;
  };

  this.createChessBoard = function (data) {
    let string = '';
    for (let i = 0; i < data.height; i++) {
      for (let j = 1; j <= data.width; j++) {
        if (i % 2 === 0) {
          string = string + data.symbol + ' ';
        } else {
          string = string + ' ' + data.symbol;
        }
      }
      string = string + '\n';
    }
    return string;
  };
}



function startChessBoard() {

  let elements = document.forms["task1-form"].elements;
  let height = elements[0].value;
  let width = elements[1].value;
  let symbol = elements[2].value;
  let data = {
    height,
    width,
    symbol
  };
  console.log(data)

  let chess = new CreateChessBoard();
  let checkChess = chess.validateChessBoard(data);

  if (checkChess.reason) {
    return checkChess.reason;

  }
 console.log(chess.createChessBoard(data));
  return chess.createChessBoard(data);
}

export default startChessBoard;