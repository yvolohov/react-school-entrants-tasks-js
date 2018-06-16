/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  let matrix = new SpiralMatrix();
  return matrix.createMatrix(n);
}

class SpiralMatrix {
  constructor() {
    this.size = 0;
    this.matrix = [];
    this.directionIndex = 0;
    this.directions = [
      {x: 1, y: 0},
      {x: 0, y: 1},
      {x: -1, y: 0},
      {x: 0, y: -1}
    ];
  }

  createMatrix(n) {
    this._createEmptyMatrix(n);
    let maxNumber = n * n;
    let x = 0;
    let y = 0;

    for (let idx = 0; idx < maxNumber; idx++) {
      let number = idx + 1;
      this.matrix[y][x] = number;

      /* проверяем следующую ячейку в направлении движения */
      let directions = this._getDirections();
      let nextX = x + directions.x;
      let nextY = y + directions.y;
      let nextCellIsCorrect = this._cellExistsAndIsEmpty(nextX, nextY);

      /* если она существует и пуста, то переходим на нее */
      if (nextCellIsCorrect) {
        x = nextX;
        y = nextY;
        continue;
      }

      /* иначе меняем направление движения */
      this._nextDirections();
      directions = this._getDirections();
      x = x + directions.x;
      y = y + directions.y;
    }
    return this.matrix;
  }

  _cellExistsAndIsEmpty(x, y) {
    let xIsCorrect = (x > -1 && x < this.size);
    let yIsCorrect = (y > -1 && y < this.size);
    return xIsCorrect && yIsCorrect && this.matrix[y][x] === null;
  }

  _getDirections() {
    return this.directions[this.directionIndex];
  }

  _nextDirections() {
    if (this.directionIndex < 3) {
      this.directionIndex++;
    }
    else {
      this.directionIndex = 0;
    }
  }

  _createEmptyMatrix(n) {
    this.size = n;
    this.matrix = [];

    for (let y = 0; y < this.size; y++) {
      let row = [];

      for (let x = 0; x < this.size; x++) {
        row.push(null);
      }
      this.matrix.push(row);
    }
  }
}

export default fillSpiralMatrix;
